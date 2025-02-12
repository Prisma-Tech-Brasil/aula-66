# Aula 4: React Hook Form e Implementação do Formulário

## 1. Introdução ao React Hook Form

O **React Hook Form** é uma biblioteca para manipulação de formulários no React, focada em performance e facilidade de uso.

### Por que usar o React Hook Form?
- Minimiza re-renderizações, tornando os formulários mais performáticos.
- Facilita validações e gerenciamento de estados do formulário.
- Possui integração nativa com bibliotecas de validação como **Yup** e **Zod**.

## 2. Instalação e Configuração

Para instalar o React Hook Form no projeto:

```sh
npm install react-hook-form
```

### Exemplo de configuração básica:

```tsx
import { useForm } from "react-hook-form";

function MeuFormulario() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome")} placeholder="Nome" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## 3. Criando um Formulário Básico

Vamos criar um formulário com os seguintes campos:
- Nome
- Cargo
- Salário
- Data de admissão

### Exemplo de implementação:

```tsx
function FormularioFuncionario() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome")} placeholder="Nome" required />
      <input {...register("cargo")} placeholder="Cargo" required />
      <input type="number" {...register("salario")} placeholder="Salário" required />
      <input type="date" {...register("dataAdmissao")} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
```

## 4. Validações Básicas

Podemos adicionar validações aos campos diretamente no `register`:

```tsx
<input {...register("nome", { required: "O nome é obrigatório" })} />
```

### Mensagens de erro:

```tsx
const { register, handleSubmit, formState: { errors } } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("nome", { required: "O nome é obrigatório" })} />
  {errors.nome && <p>{errors.nome.message}</p>}
</form>
```

## 5. Conclusão

O React Hook Form simplifica a manipulação de formulários no React, melhorando a performance e organização do código. Na próxima aula, avançaremos com Regex e React Router DOM.
