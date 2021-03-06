import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import api from "../../services/api";
import CurrencyInput from "react-currency-masked-input";

function NewProdutos() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [und, setUnd] = useState("");
  const [qtdd, setQtdd] = useState("");
  const [desc, setDesc] = useState("");
  const [validade, setValid] = useState("");
  const [price, setPreco] = useState("0.00");
  const [stockQuantity, setStock] = useState("");

  function changePrice(val) {
    let price = parseFloat(val);
    price = price.toFixed(2).toString();
    console.log(price);
    setPreco(price);
  }
  async function handler(e) {
    e.preventDefault();
    setUnd(qtdd + " " + und);
    const data = {
      name,
      valid:validade,
      price,
      und:qtdd+" "+ und,
      desc,
      stockQuantity,
    };
    try {
      var valid = true;
      if (data.desc.length < 4) {
        alert("Descrição invalido");
        valid = false;
      }
      if (data.name.length < 3) {
        alert("Nome invalido");
        valid = false;
      }
      if (data.price.length < 3) {
        alert("Preço invalido");
        valid = false;
      }
      if (data.stockQuantity.length < 1) {
        alert("Quantidade invalido");
        valid = false;
      }
      if (valid) {
        console.log(data);
        var res = await api.post("produtos", data, {});
        console.log(res);
        if (!isNaN(res.data[0])) {
          alert("Produto cadastrado com sucesso!");
          history.push("/produtos");
        } else {
          alert("Ops! Algo deu errado\nTente novamente.");
        }
      }
    } catch (erro) {
      alert("Ops! Algo deu errado\nTente novamente.");
    }
  }
  return (
    <div className="col-lg-12 px-0">
      <div className="col-lg-12 bg-danger py-2 mx-0 row">
        <h2 className="col-lg-4 text-light pl-5 header-text m-0">Farmacia</h2>
        <Link to="/produtos" className="offset-lg-5 col-lg-3 px-5 row">
          <span>
            <IoIosArrowBack size={32} color="#ffffff" />
          </span>
          <h3 className="text-light subtitle-text m-0">Voltar</h3>
        </Link>
      </div>
      <div className="col-lg-10  offset-lg-1 pt-2">
        <h3 className="text-secondary col-lg-4 offset-lg-4 title-text">
          Novo Medicamento
        </h3>
        <form onSubmit={handler} className="col-lg-12 px-0 mx-0 mt-5 ">
          <div className="col-lg-8 offset-lg-2 mt-3 px-0 row justify-content-between">
            <input
              type="text"
              placeholder="Nome"
              className="col-lg-5  form-control"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Qtdd"
              className="col-lg-2  form-control"
              onChange={(e) => setQtdd(e.target.value)}
            />
            <select
              placeholder="Unidade"
              className="col-lg-4 form-control"
              onChange={(e) => setUnd(e.target.value)}
            >
              <option value="">Selecione a unidade...</option>
              <option value="ml">ml</option>
              <option value="mg">mg</option>
              <option value="mg/L">mg/L</option>
              <option value="mg/ml">mg/ml</option>
            </select>
          </div>
          <textarea
            className="form-control col-lg-8 offset-lg-2 mt-3"
            placeholder="Descrição"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="col-lg-8 offset-lg-2 mt-3 justify-content-between px-0 row">
            <input
              placeholder="Preço"
              className="col-lg-4 form-control"
              onChange={(e) => {
                changePrice(e.target.value);
              }}
            />
            <input
              type="date"
              placeholder="Validade"
              className="col-lg-3 form-control"
              onChange={(e) => {
                setValid(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Qtdd. em estoque"
              className="col-lg-4 form-control"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="col-lg-8 offset-lg-2 btn btn-danger btn-lg mt-3 form-control"
          >
            <p className="mb-0 sample-text">Salvar</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewProdutos;
