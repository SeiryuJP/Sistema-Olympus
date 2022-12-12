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

    public function updateUser(Request $request) {
        $user = User::find($request->id)->update(['password' => bcrypt($request->newPassword)]);

        return response()->json($user,200);
    }
}
