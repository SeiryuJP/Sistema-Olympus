<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Models\AtributesUsers;

class UserController extends Controller
{
    public function allUsers() {
        $pers = User::all();

        return response()->json($pers,200);
    }

    public function updateUser(Request $request) {
        User::find($request->id)->update(['password' => bcrypt($request->new_password)]);

        return response()->json(["success"=>true, "message" => "Password changed correctly"],200);
    }

    public function updateAttributes(Request $request) {
        $atribute = AtributesUsers::with(['atributos2'])->where('userID', $request->id)->get();
            foreach ($atribute as $atr) {
                $name = $atr->atributos2[0]->name;
                DB::table('atributes_users')
                    ->join('atributes', 'atributes_users.atributeID', '=', 'atributes.ID')
                    ->where('atributes_users.userID', '=', $request->id)
                    ->where('atributes.name', '=', $name)
                    ->update(['atributes_users.value' => $request->$name]);
            }

        return response()->json(["success"=>true, "message" => "Attributes changed successfully"],200);
    }
}