"use client"
import atob from 'atob';
import { jsPDF } from 'jspdf';
import pdfjs from 'pdfjs-dist';
import { createCanvas } from 'canvas';


// Função para converter Base64 para PDF

export const base64ToPDF = (base64String: string, filename: string) => {
  // Decodifica o Base64 para dados binários
  const binaryString = atob(base64String);

  // Cria um novo documento PDF
  const pdfDoc = new jsPDF();
  pdfDoc.addImage(binaryString, 'PDF', 0, 0);
  // Salva ou exibe o documento PDF (opcional)
  // pdfDoc.save(filename + '.pdf'); // Para salvar o arquivo
  // const pdfBase64 = pdfDoc.output('datauristring'); // Para obter Base64 do PDF
  // return pdfBase64;
  return pdfDoc;
};


// Função para converter PDF para JPG
export const pdfToJPG = async (pdfData) => {
  // Carrega o documento PDF
  const loadingTask = pdfjs.getDocument({ data: pdfData });
  const pdf = await loadingTask.promise;
  
  // Carrega a primeira página do PDF
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1.0 });

  // Cria um elemento canvas para renderizar a página
  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext('2d');

  // Renderiza a página PDF no canvas
  await page.render({ canvasContext: context, viewport }).promise;

  // Converte o canvas para um formato JPG
  const jpgData = canvas.toDataURL('image/jpeg');
  
  return jpgData;
};