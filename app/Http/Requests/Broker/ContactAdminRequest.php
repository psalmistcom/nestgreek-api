<?php

namespace App\Http\Requests\Broker;

use Illuminate\Foundation\Http\FormRequest;

class ContactAdminRequest extends FormRequest
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
            'subject' => 'required|string|max:255',
            'department' => 'required|string|email|max:255',
            'message' => 'required|string',
        ];
    }
}
