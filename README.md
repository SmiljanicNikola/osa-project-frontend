### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<b>NAPOMENA: Na ovom repozitorijumu se nalazi samo Frontend, backend koji je radjen u Spring Boot-u se nalazi u zasebnom repozitorijumu i mozete ga pronaci ovde:</b> https://github.com/SmiljanicNikola/OSA-Project
<hr>
<b>Opis i specifikacija projekta:</b>
<br>U pitanju je <b>Java Spring Boot (Backend) i React (Frontend)</b> aplikacija, za cuvanje neophodnih podataka koriscen je <b>MySQL</b> (Sav potreban kod za kreiranje i punjenje svake tabele bice okacen u data.sql fajlu).
<hr>
<b>Korisnik aplikacije ima na raspolaganju sledeću funkcionalnost:</b>

<b>[A1] Registracija korisnika.</b> Prilikom registracije na sistem osim korisničkih podataka,
korisnik bira i ulogu (<b>Prodavac ili Kupac</b>). Administrator je predefinisani korisnik koji
postoji u sistemu.Takodje prilikom registracije korisnika, lozinka koju korisnik unese se u bazi 
podataka ne skladisti kao plain text vec treba biti sifrovana.

<b>[A2] Prijava i odjava sa sistema</b>. U okviru ove aktivnosti korisniku je omogućena
prijava na sistem. Pored prikaza forme za unos kredencijala, na istom prikazu uključiti
i link za prelaz na formu za registraciju. U okviru aplikacije podržati opciju za odjavu.
Podržati autentifikaciju korisnika upotrebom korisničkog imena i lozinke i <b>autorizaciju 
korisnika upotrebom mehanizma tokena</b>.

<b>[A3] Ažuriranje liste artikala (Kao i brisanje i dodavanje)</b>. Obezbediti prodavcima prikaz svih njihovih artikala. U
okviru ovog prikaza prodavac ima mogućnost da odabere neku od opcija - <b>ažuriranje</b>
ili <b>brisanje pojedinačnih artikala</b>. Klikom na dugme za brisanje artikla se isti uklanja sa
prikaza svih artikala, dok klikom na dugme za ažuriranje artikla prodavac biva
preusmeren na posebnu aktivnost za ažuriranje istog. Ažuriranje pojedinačnog artikla
realizovati kroz mehanizam popunjene forme, gde je svaki od podataka artikla moguće
izmeniti. Prodavci imaju mogućnost <b>dodavanja novih artikala</b>, gde se unose svi podaci
vezani za artikle. Nakon dodavanja novog artikla, vratiti prodavca na prikaz svih njegovih artikala.

<b>[A4] Promena lozinke i ličnih podataka</b>. Po uspešnoj promeni lozinke, korisnik se redirektuje na stranicu sa svojim 
profilom.

<b>[A5] Pregled i blokiranje korisnika </b>. Administratori imaju mogućnost pregleda svih 
korisnika, kao i blokiranja pojedinačnih korisnika. Blokirani korisnici nemaju pristup 
aplikaciji (onemogućiti njihovu prijavu na sistem).

<b>[A6] Ostavljanje komentara i recenzija</b>. Korisnik može da pregleda sve svoje nedostavljene 
porudžbine i označi one koje su stigle. Nakon isporučene porudžbine, kupac ima 
mogućnost ostavljanja recenzije na sve prispele i neocenjene porudžbine. Izborom 
jedne konkretne porudžbine, kupac ima <b>mogućnost ostavljanja komentara u slobodnoj 
formi kao i ocene (1-5)</b> pri čemu su oba podatka (i komentar i ocena) obavezni.
<hr>
ElasticSearch je koriscen za implementaciju indeksiranja i pretraživanja artikala i 
porudžbina.
<br><b>Dodatne funkcionalnosti koje su vezane za ElasticSearch:</b>

<br><b>[A7] Pretraga liste artikala</b>
<br>• Pretraživanje artikala po nazivu,
<br>• Pretraga artikala po opsegu cena (od-do), gde može biti zadata donja i/ili 
gornja granica opsega,
<b><br> • Pretprocesirati upit, tako da bude nezavisan od velikog i malog slova, kao i 
ćiriličnog ili latiničnog pisma</b>
  
<b>[A8] Pretraga porudžbina</b>
<br>• Pretraživanje porudžbina po sadržaju komentara
<br>• Pretraživanje porudžbina po opsegu ocena (od-do), gde može biti zadata 
donja i/ili gornja granica opsega,
<b><br>• Pretprocesirati upit, tako da bude nezavisan od velikog i malog slova, kao i 
ćiriličnog ili latiničnog pisma</b>
<br>
