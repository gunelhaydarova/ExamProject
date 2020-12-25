import React from "react";
import styled from "styled-components";
import "./DropDown.css";
import DropDownMenu from "./DropDown";

const Wrapper = styled.aside`
  background: #ccc;
  width: 300px;
`;

const menus = [

    {
        label: "Struktur 2",
        show: "4",
        submenu: [
            {
                label: "Hüquq",
                show: "2",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                show: "2",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 3",
        show: "4",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    }, {
        label: "Struktur 4",
        show: "4",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 5",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 6",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 7",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 8",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 9",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 10",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },
    {
        label: "Struktur 11",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    }, {
        label: "Struktur 12",
        submenu: [
            {
                label: "Hüquq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "Marketinq",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            },
            {
                label: "İnvestisiya",
                submenu: [
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    },
                    {
                        label: "Strateji"
                    }
                ]
            }
        ]
    },

];

function Test() {
    return (
        <Wrapper>

            <DropDownMenu className={'menu__style'} menus={menus}/>
        </Wrapper>
    );
}

export default Test;
