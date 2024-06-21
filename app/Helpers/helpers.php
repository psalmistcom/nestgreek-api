<?php

use App\Enums\UserTypeEnum;
use App\Models\User;

function getUserWithRole(string $user_type): User
{
    $user = User::query();

    if ($user_type === 'Client') {
        $user->whereJsonContains('user_type', UserTypeEnum::CLIENT->value);
    } elseif ($user_type === 'Broker') {
        $user->whereJsonContains('user_type', UserTypeEnum::BROKER->value);
    } else {
        $user->whereJsonContains('user_type', UserTypeEnum::ADMIN->value);
    }

    return $user->inRandomOrder()->first();
}

function checkUserType(array $availableUserType, array $user_type): bool
{
    return in_array(head($user_type), $availableUserType);
}
