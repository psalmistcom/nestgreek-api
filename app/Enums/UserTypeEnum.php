<?php


namespace App\Enums;

enum UserTypeEnum: string
{
    case BROKER = 'Broker';
    case CLIENT = 'Client';
    case ADMIN = 'Admin';
}
