document.addEventListener('DOMContentLoaded', event => {
  const peer = new Peer('sender', { host: 'localhost', port: 9000, path: '/' })

  const conn = peer.connect('receiver')

  document.querySelector('input').onchange = function(event) {
    const file = event.target.files[0]
    const blob = new Blob(event.target.files, { type: file.type })

    conn.send({
      file: blob,
      filename: file.name,
      filetype: file.type
    })
  }
})
