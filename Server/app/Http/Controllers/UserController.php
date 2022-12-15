<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Models\AtributesUsers;
use App\Models\HumanData;

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

    public function createUsers(Request $request) {
        $quantity = $request->number;
        $counter = 0;
        while ($counter < $quantity){
            $userData = [
                'name' => fake()->name(),
                'email' => fake()->unique()->safeEmail(),
                'email_verified_at' => now(),
                'password' => bcrypt('1234'), // password
                'role' => 'human',
            ];
    
            $user = User::create($userData);
    
            $dataH = [
                'ID' => $user->id,
                'fate' => 0,
                'protection' => $request->id
            ];
            HumanData::create($dataH);
            $cont = 1;
            while ($cont <= 5) {
                $dataA = [
                    'atributeID' => $cont,
                    'userID' => $user->id,
                    'value' => rand(1, 5),
                    'created_at' => now(),
                    'updated_at' => now()
                ];
                AtributesUsers::create($dataA);
                $cont++;
            }
            $counter++;
        }
        return response()->json(["success"=>true, "message" => "Users created successfully"],200);
    }
}