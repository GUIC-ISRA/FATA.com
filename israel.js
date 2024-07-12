function startVideo(exercise) {
    var durationInput = document.getElementById(exercise + 'Duration');
    var video = document.getElementById(exercise + 'Video');
    var duration = parseInt(durationInput.value, 10);

    if (isNaN(duration) || duration <= 0) {
        alert("Veuillez saisir une durée valide en secondes.");
        return;
    }

    // Démarrer la vidéo
    video.play();

    // Arrêter la vidéo après la durée spécifiée
    setTimeout(function() {
        video.pause();
    }, duration * 1000);
}
