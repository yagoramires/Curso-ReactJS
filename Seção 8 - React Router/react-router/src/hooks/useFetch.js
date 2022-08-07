import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  // state que retorna os dados obtidos no fetch
  const [data, setData] = useState(null);

  // state de configuiração do fetch
  const [config, setConfig] = useState(null);
  // state que define o metodo (post, delete)
  const [method, setMethod] = useState(null);
  // state que inicia o fetch
  const [callFetch, setCallFetch] = useState(null);

  // state de carregamento
  const [loading, setLoading] = useState(false);

  // state de erro
  const [error, setError] = useState(null);

  // state que captura o ID do item para remove-lo
  const [itemID, setItemID] = useState(null);

  // Funcao de fetch

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url); // pega os dados da API
        const json = await res.json(); // converte o JSON

        setData(json); //define os dados com o retorno da API
      } catch (e) {
        console.log(e.message);

        setError('Houve algum erro ao carregar os dados');
      } // caso de erro irá logar o erro no console e exibir essa mensagem ao usuario

      setLoading(false);
    };

    fetchData(); // inicia a função
  }, [url, callFetch]); // chama o useEffect ao alterar a URL e o callFetch

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      // Se o metodo for POST ele irá definir o state config como o objeto abaixo
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), //adiciona o data ao banco de dados ( objeto recebido ao chamar a funcao)
      });
      setMethod(method); // define o method com o metodo passado ao chamar a funcao
    } else if (method === 'DELETE') {
      // Se o metodo for DELETE ele irá definir o state config como o objeto abaixo
      setConfig({
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        // não tem body pois so remove o objeto pelo ID
      });
      setMethod(method); // define o method com o metodo passado ao chamar a funcao
      setItemID(data); // define o id do item com o data passado ao chamar a funcao
    }
  };

  useEffect(() => {
    const httpRequest = async () => {
      // funcao que realizara o request

      let json; //define a variavel json

      if (method === 'POST') {
        //valida o metodo passado

        // let fetchOptions = [url, config] // define
        const res = await fetch(url, config); //realiza o fetch de POST com a config obtida no httpConfig
        json = await res.json(); // traz os dados obtidos para a variavel json criada a cima
      } else if (method === 'DELETE') {
        //valida o metodo passado

        const res = await fetch(`${url}/${itemID}`, config); //realiza o fetch de DELETE(por ID passado na URL) com a config obtida no httpConfig
        json = await res.json(); // traz os dados obtidos para a variavel json criada a cima
      }
      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url, itemID]);

  return { data, httpConfig, loading, error };
};
