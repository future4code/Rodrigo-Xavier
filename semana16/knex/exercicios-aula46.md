### 1.a
A resposta que recebemos é o resultado da query e outras informações, devemos pegar somente as informações que desejamos.

### 1.b
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${Tony Ramos}"
  `)
  return result
}