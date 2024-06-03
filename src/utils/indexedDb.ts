

export function initializeDB() {
    const indexedDB = window.indexedDB 
    const IDBTransaction = window.IDBTransaction ;
    const IDBKeyRange = window.IDBKeyRange 

    if (!indexedDB) {
      console.error("Seu navegador não suporta IndexedDB.");
      return null;
    }
    
    const request = indexedDB.open("tokenDB", 1);
    
    request.onerror = function(event) {
      console.error("Erro ao abrir o banco de dados:", event.target.errorCode);
    };
    
    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      const objectStore = db.createObjectStore("tokens", { keyPath: "id" });
      objectStore.createIndex("token", "token", { unique: false });
    };
    
    request.onsuccess = function(event) {
    };
  }


  export function saveToken(token:string ) {
    const request = indexedDB.open("tokenDB");
    
    request.onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction(["tokens"], "readwrite");
      const objectStore = transaction.objectStore("tokens");
      const requestAdd = objectStore.add({ id: 1, token: token });
      
      requestAdd.onsuccess = function(event) {
        console.log("Token salvo com sucesso.");
      };
      
      requestAdd.onerror = function(event) {
        console.error("Erro ao salvar o token:", event.target.errorCode);
      };
    };
  }
  
  export function getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("tokenDB");
  
      request.onsuccess = function(event: any) {
        const db = event.target.result;
        const transaction = db.transaction(["tokens"], "readonly");
        const objectStore = transaction.objectStore("tokens");
        const requestGet = objectStore.get(1);
  
        requestGet.onsuccess = function(event: any) {
          const token = event.target.result?.token;
          if (token) {
            resolve(token);
          } else {
            reject("Token não encontrado");
          }
        };
  
        requestGet.onerror = function(event: any) {
          reject("Erro ao recuperar o token: " + event.target.errorCode);
        };
      };
  
      request.onerror = function(event: any) {
        reject("Erro ao abrir o banco de dados: " + event.target.errorCode);
      };
    });
  }


  export function removeToken(): Promise<void> {
    return new Promise((resolve, reject) => {

      const request = indexedDB.open("tokenDB");
      request.onsuccess = function(event: any) {
        const db = event.target.result;
        const transaction = db.transaction(["tokens"], "readwrite");
        const objectStore = transaction.objectStore("tokens");
        const requestDelete = objectStore.delete(1);
  
        requestDelete.onsuccess = function(event: any) {
          console.log("Token removido com sucesso.");
          resolve();
        };
  
        requestDelete.onerror = function(event: any) {
          reject("Erro ao remover o token: " + event.target.errorCode);
        };
      };
  
      request.onerror = function(event: any) {
        reject("Erro ao abrir o banco de dados: " + event.target.errorCode);
      };
    });
  }