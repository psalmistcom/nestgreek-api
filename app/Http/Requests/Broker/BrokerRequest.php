<?php

namespace App\Http\Requests\Broker;

use App\Models\Broker;
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
            // "name" => ['required', 'max:255', 'unique:' . Broker::class],
            "name" => 'required|string|max:255|unique:' . Broker::class,
            "address" => ['required'],
            "state" => ['required'],
            "zip_code" => 'nullable',
            "phone_number" => 'required|max:14|unique:' . Broker::class,
            'image' => ['nullable', 'image'],
            'user_id' => ['required', 'exists:users,id'],
        ];
    }
}
