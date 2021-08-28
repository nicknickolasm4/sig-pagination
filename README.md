# what is this?

Pagination for array items and set items in map


# instalation

`npm i sig-pagination --save`


## options

items = array
page = int, number page of params example: "page?p=2"
maxperpage = int, max pagination example 5: [1,2,3,4,5,next]
show = int, max items per page.

## functions
pagination return:
0: {i: 0, active: true, page: 4}
1: {i: 5, active: true, page: 5}
2: {i: 6, active: false, page: 6}
3: {i: 7, active: false, page: 7}
4: {i: 8, active: false, page: 8}
5: {i: 9, active: false, page: 9}
6: {i: 10, active: false, page: 10}
7: {i: 999999, active: true, page: 6}

active, is a active page
page, is a page params
i = pages
i = 0 page arrow left
i = 999999 arrow right

## examples

## for list items
    var products = items({
        maxperpage: 6,
        show: 5,
        items: productsd,
        page: page
      })
## list pagination
      const pagination2 = pagination({
        maxperpage: 6,
        show: 5,
        items: productsd,
        page: page
      })
## show from number example: 1 to 10 items

      const from2 = from({
        maxperpage: 6,
        show: 5,
        items: productsd,
        page: page
      })
## show to number example: 1 to 10 items

      const to2 = to({
        items: productsd,
        show: 5,
        maxperpage: 6,
        page: page
      })
## show total count items example: 1 to 10 items of 10 Total

      const total2 = total({
        maxperpage: 6,
        items: productsd,
        page: page
      })


## EXAMPLE USAGE IN NEXTJS/ REACT

`<ul className="pagination">
                  {pagination2.map((_pages, i) =>
                    _pages.active ? (
                      _pages.i == 0 ? (
                        <li key={i}>
                          <a
                            href={
                              category.slug.toLowerCase() + "?p=" + _pages.page
                            }
                            className="des-font border"
                          >
                            <i className="ti-arrow-left"></i>
                          </a>
                        </li>
                      ) : _pages.i == 999999 ? (
                        <li key={i}>
                          <a
                            href={
                              category.slug.toLowerCase() + "?p=" + _pages.page
                            }
                            className="des-font border"
                          >
                            <i className="ti-arrow-right"></i>
                          </a>
                        </li>
                      ) : (
                        <li key={i}>
                          <a
                            href={
                              category.slug.toLowerCase() + "?p=" + _pages.page
                            }
                            className="des-font active"
                          >
                            {_pages.i}
                          </a>
                        </li>
                      )
                    ) : (
                      <li key={i}>
                        <a
                          href={
                            category.slug.toLowerCase() + "?p=" + _pages.page
                          }
                          className="des-font"
                        >
                          {_pages.i}
                        </a>
                      </li>
                    )
                  )}
                </ul>`