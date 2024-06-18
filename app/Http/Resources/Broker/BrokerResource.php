<?php

namespace App\Http\Resources\Broker;

use App\Http\Resources\UserResource;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class BrokerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'address' => $this->address,
            'state' => $this->state,
            'zip_code' => $this->zip_code,
            'phone_number' => $this->phone_number,
            'image_path' => $this->image_path ? Storage::url($this->image_path) : '',
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'user' => new UserResource($this->user)
        ];
    }
}
