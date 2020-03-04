function spil() {
    ok = true
    while(ok == true) {
      kast = Math.floor(6*Math.random()) + 1
      alert(kast)
      if(kast == 1) {
        terning.src = 'ener.gif'
beloeb = -30 }
      else if(kast == 2) {
        terning.src = 'toer.gif'
        beloeb = -20
      }
      else if(kast == 3) {
        terning.src = 'treer.gif'
beloeb = -10 }
      else if(kast == 4) {
        terning.src = 'firer.gif'
        beloeb = 0
      }
      else if(kast == 5) {
        terning.src = 'femmer.gif'
beloeb = 10
      }
      else if(kast == 6) {
        terning.src = 'sekser.gif'
        beloeb = 50
}
ok = confirm('Din gevinst er '+beloeb+' kr. Fortsæt?') }
}
