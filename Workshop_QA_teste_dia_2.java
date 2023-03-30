package testes;
import org.testng.Assert;
import org.testng.annotations.Test;
import io.restassured.RestAssured;
import io.restassured.response.Response;

public class Teste1 {
	@Test
	public void teste1() {
		
		Response resposta = RestAssured.get("https://reqres.in/api/users?page=1&per_page=12");
		System.out.println(resposta.getStatusCode());
		
		int estado = resposta.getStatusCode();
		Assert.assertEquals(estado, 200);
	}
}