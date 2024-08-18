function encrypt(text) {
    const encryptionMap = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
    return text.replace(/[eioua]/g, match => encryptionMap[match]);
}

function decrypt(text) {
    const decryptionMap = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionMap[match]);
}

function processText() {
    const inputText = document.getElementById("input-text").value;
    const action = document.querySelector('input[name="action"]:checked').value;
    let resultText = "";

    if (action === "encrypt") {
        resultText = encrypt(inputText);
    } else {
        resultText = decrypt(inputText);
    }

    document.getElementById("output-text").value = resultText;
}

function copyText() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
