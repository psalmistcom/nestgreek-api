<?php

namespace App\Http\Requests\Broker;

use Illuminate\Foundation\Http\FormRequest;

class BrokerRequest extends FormRequest
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
        return [
            "name" => ['required', 'max:255'],
            "address" => ['required'],
            "state" => ['required'],
            "zip_code" => ['required'],
            "phone_number" => ['required'],
            "logo_path" => ['required'],
            'user_id' => ['required', 'exists:users,id'],
        ];
    }
}
