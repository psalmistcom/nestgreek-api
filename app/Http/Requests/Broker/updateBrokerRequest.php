<?php

namespace App\Http\Requests\Broker;

use App\Models\Broker;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class updateBrokerRequest extends FormRequest
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
        $user = $this->route("user");
        return [
            "name" => ['required', 'max:255'], //igonore
            // "name" => ['required', 'max:255', Rule::unique(Broker::class)->ignore($this->user()->id)], //igonore
            "address" => ['required'],
            "state" => ['required'],
            "zip_code" => ['required'], //igonore
            "phone_number" => ['required'], //igonore
            'image' => ['nullable', 'image'],
            'user_id' => ['required', 'exists:users,id'],
        ];
    }
}
