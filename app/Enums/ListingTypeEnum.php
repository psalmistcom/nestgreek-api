<?php


namespace App\Enums;

enum ListingTypeEnum: string
{
    case SALE = 'For Sale';
    case RENT = 'For Rent';
    case MORTGAGE = 'Mortgage';
    case LEASE = 'For Lease';
}
