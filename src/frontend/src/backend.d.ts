import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TowingRequest {
    id: RequestId;
    vehicleType: string;
    serviceDetails: string;
    name: string;
    dropLocation?: string;
    timestamp: bigint;
    phone: string;
    location: string;
}
export type RequestId = bigint;
export interface backendInterface {
    getAllRequests(): Promise<Array<TowingRequest>>;
    getRequest(id: RequestId): Promise<TowingRequest | null>;
    submitRequest(name: string, phone: string, location: string, vehicleType: string, serviceDetails: string, dropLocation: string | null): Promise<void>;
}
