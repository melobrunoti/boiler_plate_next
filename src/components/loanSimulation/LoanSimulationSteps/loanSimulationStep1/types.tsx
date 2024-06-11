interface IPeriodicity {
    code: number;
    model: string;
    minimum: string;
    maximum: string;
}

interface IRate {
    code: number;
    model: string;
    base: string;
}

interface ILoan {
    code: string;
    name: string;
    model: string;
    guarantor: string;
    disbursement_third_parties: string;
    disbursement_multiple_accounts: string;
    negative_customer: string;
    percentage_customer_income: string;
    minimum_installments_amount: string;
    maximum_installments_amount: string;
    minimum_operation_amount: string;
    maximum_operating_amount: string;
    time_admission_company: string;
    terms: string | null;
    periodicity: IPeriodicity;
    rate: IRate;
}

export interface IServerResponse {
    request_code: string;
    return: boolean;
    return_code: string;
    message: string;
    data: ILoan[];
}
