Markdown
## Padrão Triple A em Testes Unitários

O padrão Triple A (Arrange, Act, Assert) é uma abordagem estruturada para escrever testes unitários, tornando-os mais claros, concisos e fáceis de entender. Ele divide cada teste em três etapas distintas:

### 1. Arrange (Arrumar)
* **Preparação:** Nessa fase, você configura tudo o que é necessário para executar o teste. Isso inclui:
  * Criar os objetos que serão utilizados no teste.
  * Definir os valores de entrada para as funções ou métodos que serão testados.
  * Configurar qualquer estado inicial necessário para o teste.

### 2. Act (Agir)
* **Execução:** Aqui, você executa a parte do código que está sendo testada. Ou seja, a unidade de código (função, método, classe) que você quer verificar se funciona corretamente.

### 3. Assert (Afirmar)
* **Verificação:** Nesta etapa, você verifica se o resultado obtido na etapa "Act" corresponde ao resultado esperado. Para isso, você utiliza asserções, que são verificações que garantem que o código se comporta da maneira esperada.

### **Exemplo Prático (JavaScript com Jest):**

```javascript
function somar(a, b) {
  return a + b;
}

test('Deve somar dois números', () => {
  // Arrange
  const a = 5;
  const b = 3;

  // Act
  const resultado = somar(a, b);

  // Assert
  expect(resultado).toBe(8);
});