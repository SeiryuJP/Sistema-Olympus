<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\HumanData;
use App\Models\AtributesUsers;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\VerificationMail;

class AuthController extends Controller {
    public function register(Request $request){
        $messages = [
            'email' => 'El campo no se ajusta a un correo estándar',
            'same' => 'Los campos :password y :confirm_password deben coincidir.',
            'max' => 'El campo se excede del tamaño máximo :max',
            'between' => 'El valor del campo :edad no está entre :18,100',
        ];
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:20',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
            'edad' => 'numeric|between:18,100'
        ],$messages);

        if($validator->fails()){
            return response()->json($validator->errors(),400);
        }

        
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token']  = $user->createToken('token'.$user['id'], ["read","create"])->plainTextToken;
        $success['name'] =  $user->name;
        VerificationMail::sendMail($user->email);
        $dataH = [
            'ID' => $user->id,
            'fate' => 0,
            'protection' => rand(1, 3)
        ];
        $humanData = HumanData::create($dataH);
        $cont = 1;
        while ($cont <= 5) {
            $dataA = [
                'atributeID' => $cont,
                'userID' => $user->id,
                'value' => rand(1, 5)
            ];
            $atributesData = AtributesUsers::create($dataA);
            $cont++;
        }
        redirect('api');
        return response()->json(["success"=>true,"data"=>$success, "message" => "User successfully registered!"],200);
    }

    public function login(Request $request){
         if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $auth = Auth::user();
            $role = $auth->role;
            switch ($auth->role) {
                case 'human':
                    $success['token'] =  $auth->createToken('token'.$auth->id, ["read"])->plainTextToken;
                    $success['name'] =  $auth->name;
                    return response()->json(["success"=>true,"data"=>$success, "message" => "Logged in!"],200);
                    break;
                
                case 'god':
                    $success['token'] =  $auth->createToken('token'.$auth->id, ["read","delete","create"])->plainTextToken;
                    $success['name'] =  $auth->name;
                    return response()->json(["success"=>true,"data"=>$success, "message" => "Logged in!"],200);
                    break;
            }
        }
        else{
            return response()->json(["success"=>false, "message" => "Unauthorised"],202);
        }
    }

    public function logout(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $cantidad = Auth::user()->tokens()->delete();
            return response()->json(["success"=>$cantidad, "message" => "Tokens Revoked"],200);
        }
        else {
            return response()->json("Unauthorised",204);
        }

    }  
}
