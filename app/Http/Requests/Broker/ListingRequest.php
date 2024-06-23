<?php

namespace App\Http\Requests\Broker;

use App\Enums\ListingTypeEnum;
use App\Enums\PropertyStatusEnum;
use App\Enums\PropertyTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ListingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        // return [
        //     "broker_id" => 'required|exists:brokers,id',
        //     "title" => 'required|max:255',
        //     "address" => 'required',
        //     "listing_type" => [
        //         'required', 'string',
        //         Rule::in([
        //             ListingTypeEnum::LEASE->value,
        //             ListingTypeEnum::MORTGAGE->value,
        //             ListingTypeEnum::RENT->value,
        //             ListingTypeEnum::SALE->value
        //         ])
        //     ],
        //     "state" => 'required',
        //     "description" => 'required',
        //     "isPublished" => 'required',
        //     "price" => 'required|numeric',
        //     "bedrooms" => 'nullable',
        //     "bathrooms" => 'nullable',
        //     "sqft" => 'nullable',
        //     "property_status" => 'nullable',
        //     "property_type" => 'nullable',
        //     "upload_img" => 'nullable',
        // ];
        return [
            "broker_id" => 'required|exists:brokers,id',
            "title" => 'required|max:255',
            "address" => 'required',
            "listing_type" => [
                'required', 'string',
                Rule::in([
                    ListingTypeEnum::LEASE->value,
                    ListingTypeEnum::MORTGAGE->value,
                    ListingTypeEnum::RENT->value,
                    ListingTypeEnum::SALE->value
                ])
            ],
            "state" => 'required',
            "description" => 'required',
            "isPublished" => 'required',
            "price" => 'required|numeric',
            "bedrooms" => 'required|numeric',
            "bathrooms" => 'required|numeric',
            "sqft" => 'required|numeric',
            "property_status" => [
                'required', 'string',
                Rule::in([
                    PropertyStatusEnum::HOLD->value,
                    PropertyStatusEnum::SALE->value,
                    PropertyStatusEnum::SOLD->value
                ])
            ],
            "property_type" => [
                'required', 'string',
                Rule::in([
                    PropertyTypeEnum::HOUSING->value,
                    PropertyTypeEnum::LANDED->value,
                ])
            ],
            "upload_img" => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ];
    }
}
