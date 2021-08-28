function items(options) {

  var productsd = options.items

  var page = options.page
  if (!page) {
    page = 1;
  }
  const showproducts = options.show;
  var calcd = showproducts * (page - 1);
  var calcd2 = showproducts * (page - 1) + showproducts;
  const totalprodutos = productsd.length;
  if (calcd2 >= totalprodutos) {
    calcd2 = totalprodutos;
  }
  if (page == 1) {
    calcd = 1;
  }

  var start = 0;
  var end = showproducts;

  if (page == 1) {
    start = 0;
    end = showproducts;
  } else {
    start = showproducts * (page - 1);
    end = showproducts * (page - 1) + showproducts;
  }

  var products = productsd.slice(start, end);

  return products;
}

function pagination(options) {
  var productsd = options.items

  var page = options.page

  if (!page) {
    page = 1;
  }
  const totalprodutos = productsd.length;
  const showproducts = options.show;
  var calcd = showproducts * (page - 1);
  var calcd2 = showproducts * (page - 1) + showproducts;

  if (calcd2 >= totalprodutos) {
    calcd2 = totalprodutos;
  }
  if (page == 1) {
    calcd = 1;
  }

  const optionsd = [];
  const final = [];

  const pages2 = totalprodutos / showproducts;
  const totalpaginacao = Math.ceil(pages2);

  const penultima = totalpaginacao - 1;
  const proxima = page + 1;
  const voltar = page - 1;
  const totalmaxpage = options.maxperpage;

  var nextpage = 0;
  if (totalpaginacao > 6) {
    nextpage = totalpaginacao;
    if (nextpage < totalpaginacao) {
      nextpage = page + totalpaginacao;
    }
  } else {
    nextpage = totalpaginacao;
  }
  for (var i = 1; i <= nextpage; i++) {
    var ia = i + 9999;
    if (i === 1) {
      if (page !== 1) {
        optionsd.push({'i': 0, active: true, page: page - 1});
      }
    }
    if (i > voltar) {
      if (i < page + totalmaxpage) {
        if (i === page) {
          optionsd.push({i, active: true, page: i});
        } else {
          optionsd.push({i, active: false, page: i});
        }
      }
    }

    if (i === penultima) {
      final.push({'i': 999999, active: true, page: page+1});
    }
    if (i === totalpaginacao) {
      if (page < totalpaginacao) {
        optionsd.push(final[0]);
      }
    }
  }

  return optionsd;
}

function from(options) {
  var productsd = options.items

  var page = options.page

  if (!page) {
    page = 1;
  }
  const totalprodutos = productsd.length;
  const showproducts = options.show;
  var calcd = showproducts * (page - 1);
  var calcd2 = showproducts * (page - 1) + showproducts;

  if (calcd2 >= totalprodutos) {
    calcd2 = totalprodutos;
  }
  if (page == 1) {
    calcd = 1;
  }

  return calcd;
}

function to(options) {
  var productsd = options.items

  var page = options.page

  if (!page) {
    page = 1;
  }
  const totalprodutos = productsd.length;
  const showproducts = options.show;
  var calcd = showproducts * (page - 1);
  var calcd2 = showproducts * (page - 1) + showproducts;

  if (calcd2 >= totalprodutos) {
    calcd2 = totalprodutos;
  }
  if (page == 1) {
    calcd = 1;
  }

  return calcd2;
}

function total(options) {
  var productsd = options.items

  var page = options.page

  if (!page) {
    page = 1;
  }
  const totalprodutos = productsd.length;
  const showproducts = options.show;
  var calcd = showproducts * (page - 1);
  var calcd2 = showproducts * (page - 1) + showproducts;

  if (calcd2 >= totalprodutos) {
    calcd2 = totalprodutos;
  }
  if (page == 1) {
    calcd = 1;
  }

  return totalprodutos;
}

module.exports.items = items
module.exports.pagination = pagination
module.exports.from = from
module.exports.to = to
module.exports.total = total


