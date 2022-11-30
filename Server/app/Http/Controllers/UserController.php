<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function allUsers() {
        $pers = User::all();

        return response()->json($pers,200);
    }
}
