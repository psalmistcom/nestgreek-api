<?php

namespace App\Http\Resources\Broker;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

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
            // 'upload_img' => new ImageResource($this->hasImage)
            'upload_img' => $this->hasImage
        ];
    }
}
