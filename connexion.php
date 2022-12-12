<?php
include_once "header.php"
?>

<style>
    body{
        background: url('public/connexion.jpg');
        background-size: cover;
    }
</style>
<form action="">
    <div class="container mt-5 col-md-6">
        <div class="card">
            <div class="card-header bg-transparent text-center"><h2>CONNEXION</h2></div>
            <div class="card-body">
                <label for="">Login</label>
                <input type="text" class="form-control" name="login" placeholder="Login">
                <label for="">Mot de passe</label>
                <input type="text" class="form-control" name="mdp" placeholder="Mot de passe">
                <button type="submit" class="btn btn-success mt-3 offset-5 col-md-3 " name="connexion">Connexion</button>
            </div>
        </div>
    </div>
</form>