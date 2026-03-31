import org.junit.*;
import static org.junit.Assert.*;

public class TestUtente {
	private Utente u;
	public void setUp() {
		this.u = new Utente("test username", "test password");
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

public class TestPostoAuto {
	private PostoAuto pa;
	
	/*ridefinisco gli enum (che sarebbero già presenti nella classe PostoAuto) per eseguire i test,
	difatti aggiungo una voce "test1" ed una "test2" per la sola esecuzione dei test in fase di sviluppo,
	questa voce non sarà presente nell'applicazione finale.*/
	
	public enum dimensioni {Auto_piccola, Auto_grande, Furgone, Camion, Moto, Bicicletta, test1, test2};
	public enum tipologiaPostoAuto {Al_chiuso, Outdoor_coperto, Outdoor_scoperto, test1, test2};
	public enum tipologiaAccesso {Codice, Chiave, test1, test2};
	
	public void setUp() {
		this.pa = new PostoAuto("test nome", "test indirizzo", dimensioni.test1, "test prezzo", tipologiaPostoAuto.test1, tipologiaAccesso.test1);
	} 
	
	@Test
	public void testGetter() {
		assertEquals("test nome", pa.getNome());
		assertEquals("test indirizzo", pa.getIndirizzo());
		assertEquals(dimensioni.test1, pa.getDimensioni());
		assertEquals("test prezzo", pa.getPrezzo());
		assertEquals(tipologiaPostoAuto.test1, pa.getTipologiaPostoAuto());
		assertEquals(tipologiaAccesso.test1, pa.getTipologiaAccesso());
	} 

	@Test
	public void testSetter() {
		this.pa.setNome("new nome");
		assertEquals("new nome", pa.getNome());
		
		this.pa.setIndirizzo("new indirizzo");
		assertEquals("new indirizzo", pa.getIndirizzo());
		
		this.pa.setDimensioni(dimensioni.test2);
		assertEquals(dimensioni.test2, pa.getDimensioni());
		
		this.pa.setPrezzo("new prezzo");
		assertEquals("new prezzo", pa.getPrezzo());
		
		this.pa.setTipologiaPostoAuto(tipologiaPostoAuto.test2);
		assertEquals(tipologiaPostoAuto.test2, pa.getTipologiaPostoAuto());
		
		this.pa.setTipologiaAccesso(tipologiaAccesso.test2);
		assertEquals(tipologiaAccesso.test2, pa.getTipologiaAccesso());
	} 
}

public class TestPrenotazione {
    private Prenotazione p;
    private Utente u;
    private PostoAuto pa;

    @Before
    public void setUp() {
        u = new Utente("test utente", "password");

		//quì non ridefinisco gli enum di PostoAuto poichè quì non mi sarebbe utile avere delle voci di test.
        pa = new PostoAuto("test postoAuto", "indirizzo", PostoAuto.Dimensioni.Auto_piccola, "10€", PostoAuto.TipologiaPostoAuto.Al_chiuso, PostoAuto.TipologiaAccesso.Codice);

        p = new Prenotazione("test iD", pa, "test rangeDate", /*isPagamentoEffettuato =*/false, u);
    }

    @Test
    public void testGetter() {
        assertEquals("test iD", p.getID());
        assertEquals("test postoAuto", p.getPostoAuto().getNome());
        assertEquals("test rangeDate", p.getRangeDate());
        assertFalse(p.getIsPagamentoEffettuato());
        assertEquals("test utente", p.getUtente().getUsername());
    }

    @Test
    public void testSetter() {
        p.setID("new iD");
        assertEquals("new iD", p.getID());

        PostoAuto newPa = new PostoAuto("new postoAuto", "indirizzo", PostoAuto.Dimensioni.Auto_grande, "20€", PostoAuto.TipologiaPostoAuto.Outdoor_coperto, PostoAuto.TipologiaAccesso.Chiave);
		p.setPostoAuto(newPa);
        assertEquals("new postoAuto", p.getPostoAuto().getNome());

        p.setRangeDate("new rangeDate");
        assertEquals("new rangeDate", p.getRangeDate());

        p.setIsPagamentoEffettuato(true);
        assertTrue(p.getIsPagamentoEffettuato());

        Utente newU = new Utente("new utente", "pass");
        p.setUtente(newU);
        assertEquals("new utente", p.getUtente().getUsername());
    }
}
