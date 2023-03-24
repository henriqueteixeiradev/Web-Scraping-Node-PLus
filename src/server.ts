import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://labcard.com.br/cartaoplussaude/login.php");

  //   login
  await page.waitForSelector('input[name="usuario"');
  await page.type('input[name="usuario"]', "usuário", { delay: 100 });
  await page.type('input[name="senha"]', "senha", { delay: 100 });
  await page.keyboard.press("Enter");

  // Esperar pelo diálogo de alerta e confirmá-lo
  page.on("dialog", async (dialog) => {
    // console.log(dialog.message()); // opcional: exibe a mensagem do diálogo no console
    await dialog.accept();
  });

  //   Redirecionado para a página de cadastro
  setTimeout(async () => {
    await page.goto(
      "https://labcard.com.br/cartaoplussaude/index.php?page=cadastrar_clientes"
    );
  }, 2000);

  // Cadastrando usuário
  await page.waitForSelector('input[name="nome"');
  await page.type('input[name="nome"]', "Henrique Desenvolvedor", {
    delay: 100,
  });

  //   data de nascimento
  await page.focus('input[name="data_nascimento"]');
  await page.keyboard.press("Backspace");
  await page.type('input[name="data_nascimento"]', "04021989", {
    delay: 100,
  });

  await page.type('input[name="rg"]', "392222224", { delay: 100 });

  //   cpf
  await page.focus('input[name="cpf"]');
  await page.keyboard.press("Backspace");
  await page.type('input[name="cpf"]', "38202692822", { delay: 100 });

  await page.select('select[name="sexo"]', "masculino");
  await page.select('select[name="estado_civil"]', "solteiro");
  await page.type('input[name="ddd"]', "82", { delay: 100 });
  await page.type('input[name="telefone"]', "98888-8888", { delay: 100 });

  //   email
  //   try {
  //     await page.type('input[name="email"]', "bellmontsistema@gmail.com", {
  //       delay: 100,
  //     });
  //   } catch (error: any) {
  //     console.error("Erro ao preencher campo de e-mail:", error.message);
  //     process.exit();
  //   }

  await page.type('input[name="email"]', "bellmontsistema@gmail.com", {
    delay: 100,
  });

  await page.select('select[name="vendedor"]', "1");
  await page.select('select[name="cartao_padrao"]', "1");
  await page.select('select[name="planos"]', "7113222271341");

  //   cep
  await page.focus('input[name="cep"]');
  await page.keyboard.press("Backspace");
  await page.type('input[name="cep"]', "57043175", { delay: 100 });

  setTimeout(async () => {
    await page.type('input[name="rua"]', "Travessa Santo Antônio", {
      delay: 100,
    });
  }, 2000);

  await page.type('input[name="num"]', "117", { delay: 100 });
  await page.type('input[name="complemento"]', "casa 10", { delay: 100 });
  await page.type('input[name="bairro"]', "feitosa", { delay: 100 });

  //   await page.waitForSelector('input[name="cadastrar"]');

  setTimeout(async () => {
    await page.click('input[name="cadastrar"]');
  }, 2000);

  //   await browser.close();
})();
