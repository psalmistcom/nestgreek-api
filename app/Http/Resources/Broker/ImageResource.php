<?php

namespace App\Http\Resources\Broker;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ImageResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            // 'upload_img' => $this->upload_img,
            'upload_img' => $this->upload_img ? Storage::url($this->upload_img) : '',
            'property_id' => $this->property_id,
        ];
    }
}
