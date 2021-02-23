export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  entries: Entry[],
  dateOfBirth?: string;
}
export interface BaseEntry{
  id:string,
  description: string,
  date: string,
  specialist: string,
  diagnosisCodes?: string[]
}

export enum HealthCheckRating{
  "Healthy" =0,
  "LowRisk"= 1,
  "HighRisk"=2,
  "CriticalRisk"= 3

}

export interface HealthCheckEntry extends BaseEntry{
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating
}

export interface SickLeave{
  startDate: string,
  endDate: string
}

export interface OccupationalHealthcareEntry extends BaseEntry{
  type: "OccupationalHealthcare";
  employerName: string,
  sickLeave?: SickLeave
}

export interface Discharge{
  date: string,
  criteria: string
}
export interface HospitalEntry extends BaseEntry{
  type: "Hospital";
  discharge : Discharge
}

export type Entry = HospitalEntry|OccupationalHealthcareEntry|HealthCheckEntry
