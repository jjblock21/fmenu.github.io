function download(adress, filename) {
    fetch('http://ovh.net/files/1Mb.dat').then(resp => resp.blob()).then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  })
  .catch(() => alert('oh no!\nThe download failed!'));
}