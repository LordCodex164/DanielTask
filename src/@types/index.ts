export type FreightifyOffer = {
    freightify_request_id: string;
    freightify_offer_id: string;
    carrier_name: string;
    carrier_image: string;
    carrier_scac: string;
    offer_type: string;
    route_schedule: any[]; // You can define a more specific type for route_schedule if needed
    service_type: string;
    sailing_date: Date | null | undefined | any;
    demurrage_days: number;
    detention_days: number;
    valid_to: Date;
    valid_from: Date;
    commodity: string;
    total_amount_usd: number;
    total_amount_ngn: number;
    transit_time: string;
    charge_breakdown: {
        ocean_charges: {
            amount: number;
            amountUsd: number;
            description: string;
            qty: number;
            rate: number;
            rateCurrency: string;
            rateUsd: number;
            rateBasis: string;
            rateTypeCode: string;
            paymentMethod: string;
            containerType: string;
            amountNgn: number;
            rateNgn: number;
        }[];
    };
    origin_port_code: string;
    destination_port_code: string;
    special_rate_id: string;
  }

export interface RateListProps{
    data: FreightifyOffer[] | undefined | unknown | any;
    name: string
}

export interface Option {
    label: string;
    value: string
}

export interface DropDownProps{
    options: Option[];
    selected: boolean;
    setSelected: any;
    selectedValue: string;
    setSelectedValue: any;
}