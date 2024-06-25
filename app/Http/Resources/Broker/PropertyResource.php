<?php

namespace App\Http\Resources\Broker;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PropertyResource extends JsonResource
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
            'id' => (string)$this->id,
            'title' => $this->title,
            'address' => $this->address,
            'listing_type' => $this->listing_type,
            'state' => $this->state,
            'description' => $this->description,
            'isPublished' => $this->isPublished,
            'characteristics' => new CharacteristicsResource($this->characteristic),
            'broker' => new BrokerResource($this->broker),
            // 'images' => new ImageResource($this->hasImages)
            // 'upload_img' => $this->upload_img
            'upload_img' => $this->upload_img ? Storage::url($this->upload_img) : '',
            // 'upload_img' => $this->hasImage
        ];
    }
}
