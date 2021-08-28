function items(options) {
    if(options.items && options.page){

    }
    const productsd = options.items
    const page = options.page
    if (!page) {
      page = 1;
    }
    const showproducts = 5;
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
    const products = options.items
    const page = options.page
    if (!page) {
      page = 1;
    }
    const totalprodutos = products.length;
    const showproducts = 5;
    var calcd = showproducts * (page - 1);
    var calcd2 = showproducts * (page - 1) + showproducts;

    if (calcd2 >= totalprodutos) {
      calcd2 = totalprodutos;
    }
    if (page == 1) {
      calcd = 1;
    }

    const options = [];
    const final = [];

    const pages2 = totalprodutos / showproducts;
    const totalpaginacao = Math.ceil(pages2);

    const penultima = totalpaginacao - 1;
    const proxima = page + 1;
    const voltar = page - 1;
    const totalmaxpage = 6;

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
          options.push(
            <li key={ia + 999}>
              <a
                href={category.slug.toLowerCase() + "?p=" + voltar}
                className="des-font border"
              >
                <i className="ti-arrow-left"></i>
              </a>
            </li>
          );
        }
      }
      if (i > voltar) {
        if (i < page + totalmaxpage) {
          if (i === page) {
            options.push(
              <li key={ia}>
                <a href={category.slug.toLowerCase()} className="des-font active">
                  {i}
                </a>
              </li>
            );
          } else {
            options.push(
              <li key={ia}>
                <a
                  href={category.slug.toLowerCase() + "?p=" + i}
                  className="des-font"
                >
                  {i}
                </a>
              </li>
            );
          }
        }
      }

      if (i === penultima) {
        final.push(
          <li key={ia + 33}>
            <a
              href={category.slug.toLowerCase() + "?p=" + proxima}
              className="des-font border"
            >
              <i className="ti-arrow-right"></i>
            </a>
          </li>
        );
      }
      if (i === totalpaginacao) {
        if (page < totalpaginacao) {
          options.push(final[0]);
        }
      }
    }
    console.log(options);
    return options;
  }

  function from(options) {
    const products = options.items
    const page = options.page
    if (!page) {
      page = 1;
    }
    const totalprodutos = products.length;
    const showproducts = 5;
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
    const products = options.items
    const page = options.page
    if (!page) {
      page = 1;
    }
    const totalprodutos = products.length;
    const showproducts = 5;
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
    const products = options.items
    const page = options.page
    if (!page) {
      page = 1;
    }
    const totalprodutos = products.length;
    const showproducts = 5;
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


