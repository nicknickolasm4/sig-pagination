
<ul className="pagination">
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
                </ul>
