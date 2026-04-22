import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import java.util.ArrayList;


public class TestPostoAuto {

    private PostoAuto pa;

    private String nome;
    private String indirizzo;
    private dimensioni dimensione;
    private String prezzo;
    private tipologiaPostoAuto tipologia;
    private tipologiaAccesso accesso;
	private RangeDate date;

    /* Enum di test */
    public enum dimensioni {
        Auto_piccola, Auto_grande, Furgone, Camion, Moto, Bicicletta, test1, test2
    }

    public enum tipologiaPostoAuto {
        Al_chiuso, Outdoor_coperto, Outdoor_scoperto, test1, test2
    }

    public enum tipologiaAccesso {
        Codice, Chiave, test1, test2
    }

    @Before
    public void setUp() {
        // Inizializzazione dati di test
        nome = "test nome";
        indirizzo = "test indirizzo";
        dimensione = dimensioni.test1;
        prezzo = "test prezzo";
		date = new RangeDate ("00/00/0000", "01/01/01")
        tipologia = tipologiaPostoAuto.test1;
        accesso = tipologiaAccesso.test1;

        pa = new PostoAuto(
                nome,
                indirizzo,
                dimensione,
                prezzo,
                tipologia,
                accesso,
				date
        );
    }

    @Test
    public void testCostruttore() {
		//verifichiamo la corretta inizializzazione da parte del costruttore
        assertEquals(nome, pa.getNome());
        assertEquals(indirizzo, pa.getIndirizzo());
        assertEquals(dimensione, pa.getDimensioni());
        assertEquals(prezzo, pa.getPrezzo());
        assertEquals(tipologia, pa.getTipologiaPostoAuto());
        assertEquals(accesso, pa.getTipologiaAccesso());
		assertEquals(date, pa.getRangeDate());
    }

    @Test
    public void testMetodi() {
        //testiamo il funzionamento dei metodi base per i posti auto
		
		//test recensione
        Valutazione voto = valutazione.3_STELLE;
		Recensione rec = new Recensione(voto, "test", pa);
		pa.aggiungiRecensione(rec);
		assertEquals(1, pa.getRecensioni().size());
		
		//test modifica disponibilità
		RangeDate rd2 = new RangeDate("02/02/0002", "03/03/0003");
		pa.modificaRangeDate(rd2);
		assertEquals("02/02/0002", pa.getRangeDate().get(0).getInizio());
		assertEquals("03/03/0003", pa.getRangeDate().get(0).getFine());
		
		//test rimuovendo una data
		boolean risultato = pa.rimuoviData("03/09/0003");
		assertFalse(risultato);
    }
}

public class TestUtente {
	private Utente u;
	public void setUp() {
		this.u = new Utente("test username", "test password");
		//ignoriamo il fatto che tale password non sarebbe valida secondo i vincoli da noi imposti.
	} 
	
	@Test
	public void testGetter() {
		assertEquals("test username", u.getUsername());
		assertEquals("test password", u.getPassword());
	} 
	
	@Test
	public void testSetter() {
		this.u.setUsername("new username");
		assertEquals("new username", u.getUsername());
		
		this.u.setPassword("new password");
		assertEquals("new password", u.getPassword());
	}
} 

//ora proveremo i test secondo i requisiti ed i vincoli del sistema

@Test
public void testPrezzoNegativo() {
    try {
        new PostoAuto(nome, indirizzo, dimensione, "-10", tipologia, accesso, date);
        fail("Doveva lanciare eccezione");
    } catch (IllegalArgumentException e) {
        assertTrue(true);
    }
}

@Test(expected = IllegalArgumentException.class)
public void testDateNonValide() {
    new RangeDate("10/10/2025", "01/01/2025");
}

@Test
public void testUnaRecensionePerUtente() {
	//un posto auto deve avere massimo 1 recensione per utente.
    Utente u = new Utente("u1", "pass");
    
    Recensione r1 = new Recensione(valutazione._3_STELLE, "ok", pa, u);
    Recensione r2 = new Recensione(valutazione._5_STELLE, "top", pa, u);

    pa.aggiungiRecensione(r1);
    pa.aggiungiRecensione(r2);

    assertEquals(1, pa.getRecensioni().size());
}

@Test
public void testBloccoDopo3Tentativi() {
    AuthService auth = new AuthService();

    auth.login("user", "wrong");
    auth.login("user", "wrong");
    auth.login("user", "wrong");

    assertTrue(auth.isBloccato("user"));
}

@Test
public void testPrenotazioneRendeIndisponibile() {
    pa.prenota("01/01/2025", "05/01/2025");

    assertFalse(pa.isDisponibile("03/01/2025"));
}
