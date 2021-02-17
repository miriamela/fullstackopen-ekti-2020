
export enum Gender {
    Male = "male",
    Female="female",
    Other ="other"
}

export interface PatientEntry {
    id: string,
    name: string,
    dateOfBirth:string,
    ssn:string,
    gender: string,
    occupation: string,
}
export type NonSensitiveData = Omit<PatientEntry, "ssn">

export type newPatientEntry= Omit<PatientEntry, "id">

export interface DiagnoseEntry{
    code: string,
    name: string,
    latin?:string,
}
