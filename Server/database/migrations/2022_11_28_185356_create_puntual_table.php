<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('puntual', function (Blueprint $table) {
            $table->unsignedBigInteger('idprueba');
            $table->foreign('idprueba')->references('id')->on('prueba')->onDelete('cascade');
            $table->string('descripcion');
            $table->string('habilidad');
            $table->integer('porcentaje');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('puntual');
    }
};
