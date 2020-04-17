import React from "react";
import ProfilePosts from "./ProfilePosts"
import PersonalInfo from "./PersonalInfo"
function LargeProfilePic() {
    return (
        <>
        <br/>
        <div className="row ">
            <div className="col-2"/>
            <div className="col-6 ml-4">
                <div class="card">
                    <div class="card-body">
                        <h4>Posts</h4>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <ProfilePosts/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div class="card">
                    <div class="card-body">
                        <h4>Profile Info</h4>
                        <hr/>
                        <br/>
                        <p><h5><b>Specialization:</b></h5> Neonatal Care</p>

                        <p><h5><b>Education:</b></h5> MD from Rice Medical School</p>

                        <p><h5><b>Birthday:</b></h5> 11/16/1969 (50 years old)</p>
                        
                        <p><h5><b>Office Located at:</b></h5> 1636 Swick Hill Street</p>

                        <p>Houston, Texas(TX), 77032</p>

                        <p><h5><b>Hospital Affiliation:</b></h5> Texas Childrens Hospital</p>

                        <p><h5><b>Telephone:</b></h5> 979-943-3978</p>

                        <p><h5><b> Mobile:</b></h5> 832-205-9407</p>
                        <br/>

                        <PersonalInfo/>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQERAVFRAQEBUVFxYQFRUVFxUQFRcWFxYVFRUYHSggGBolHhUWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHx8tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLSsrKy0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAYFBwj/xAA/EAACAQIEAwYDBQYEBwEAAAABAgADEQQSITEFQVEGEyJhcYGRobEHFDJSciNCYsHR8DOCosIVFiRTkrLxF//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAgICAQQDAQAAAAAAAAABAhEDIRIxUQQiQWETMlJC/9oADAMBAAIRAxEAPwD24wG0DAQhYkWJKFiQhAIQiwpYQiSBYQhAIQhAIQmT7c9pvuqNTpn9qRqRuL7KDyJ68h6iCH9q+2+HwIK27yqP3VICqf4mPPy3mJwP2v1WqZXw9Mob/gLAgDzuQZ53xzE3f9repXbXKv4UB1t68/rKi4Kso7zuyg52vsfWTcntvx+Hr9b7WsKxRWoVBqbkFSB6dZsOEcUo4pO9ouGQ6eYPQjkZ8x12Ia4N15ia/sL2kbB1lcEmi5C1FP5evqL3HvG9JcNvaK259ZVO8s1WB1GoOo9DK53isHiWKEgEnoRBbSTjaQU5YG0qJEjm2jUjmgSmMaSRjSqiaNtHmNlQ0xI+NhCQhCBdMAfrFaIOfrI0URIsICQiwhQBFiRZAQhCAQhCAQhCBDjMQKSPUbZFJnh/Hsea1e51JN7db6n4zefaBxsAGgrWVBdyObclmH7B4f7zi2dh4aXiN9h+UfEfI9ZjKuuGK72T7HqjPicSL1nJax/dvyl7iuDQXAAsZJ2n4+cPUCivR8X7jBlNv1XP0lP701an3hXKL23uL+R5ieXl29fGxPHuCAXdBY+Uz+GbIeg+nl8flN7xaogFmqKNP3iBMJiBZyNwb7bWOn1tN8WVvVZ5cZ7j3DsVxDv8HSJN2p/s29V2/wBJU+86/Oee/ZFjCRVpk7oG/wAyHIT7gr8J6HzneeniymqeJPQkAk9CaZW6cnG0hpyYbSokSPbaMSPMCUfyjWjhy9IjQqExI5o2VBGmOiGUNhFhCLjRBzitEHOZbLCEJQQhCQEWJCAsIkICxIQgEbVqBQWOgA19I6VeJU8yW5Z0v5jML39oHkHa8tVrmmoPjV6qg6F1FzcDmTr/AGZ3OwnCzRw1VyPHUqkn0AAAnK+0DHLQ4j37hslBFp/s7ZrPTYjLfTQ39psOzla+Bw1R7Bq1JX93FwPpOF3v9PXjZ4/tiu1WDp4xwACtVXvZT4Sw0zFTpe2l5ZXhVTCYFlclmeqCoPKwOmnlLWEwLPXNUL4EfUnS+uwnQ7VYmm+RRUWy3JF7kMdBcCcvK2du3jJlJHlFdsWXBAGp1IW5t6XE5fFqhzUy1MI9vEBbfMvT3mzFPOxt1+cyHbYhKyqNlQX9SwP0m8Mt3THJh4zbU/ZNWtiSvVao+jf7Z6xznhn2dY8U8ZSYnwtUI/8AIEfz+U905ztHkzPEmoSESajNOa5Tk42kFOTjaaQ9I+MSPkEo2HpEaCiBhUTRI9oyVBEixJQkIsSBbhaEJloQhCUEIQgEIQkBCEIBCLEgEbVFwRHxr7GB4b9qClq9Rj+E1B8Auh+VpteybNV4bhVP40oqB/k/AfcKJkvtMQ1GNGmv7ZnRUF92LALfoLae00uBr/ckp0wbilTVPXKAL/KeXPLxmq9eE33DeH8HbBrUqB3qpUW70mdtHFzmpa+Em+o2MyXE8VQZ2ej33eWayVEU68gWvtN5xLEpWpZkJUsPSZGurU8xd9OptMXOevbvhOrXH4dWcB6lZVpkDxBTcaa3uZ5rxviv3ly9iCXbUndCfALW0sJ2O1/aQ1S2HpaUgbMebkbjyX6zKrO/Fhr7q8vNyb+2NL2Qq2xFMnYOhPpmAP1M+iMKCFAO4Fvht8p839mqZNT4D3uJ9IYQ3VW/MoPxAmv+nPL+sWRJaMiEmozbkuU5OJBTk42lQqSSRpJIEw2jTHDYRGhUZjTHmNMqEiRYkBIQhKLUIQkaEIQgEIRICwiRRIFhCEAiRZFWrBbmBLKmKqnYbdZza3Ew+Zb2yn/5I62L0RgdNiPObmLNrzjj+f8A4qrDUYSh3zC34gWcMfYWPsZNxDiAqAsDuOU6HFqq0uL4Woo0rYSqD6q6af6iZmu2HCmwVcmkD92qsMoG1N23TyF9R5ek831PFv7o9X0/Lrqulhcee7C/lmY7TYywY/lBt68pN96KFlOjA2NtdR5jSZ/jrl1ZRta9zPLhj329Wd66Ypr6k7nf15yTDU8x9J2MZwV2ofeUFwACRzykb+3Oc7CPsPP4k/01M+hXz5O2n7J4Yd5SvpnqoPa+v9+c96wq2VB0UT58p4zKUy8mHwBF/wCXwnvPBMWKtKmwO6D4jQj1BvOM9unJ6dMSajIRJqM6OC5Tk42kFOT8ppC05JI6ckgSrsINFXYRGhTDEimJKGxI4xsISEWJKLUIQmWhCEDKCEIQCEIQCEIjHSQRNX3ty0nIqY5c5UsDbQiXKlTK5F9G0PkeUynFWIdmXQo3ynSRiocRVJZhfXWx6iWaGLDAht+duvWUsWQQHHOx/qPjeROdmE0jj9qsaBieHuCb966NofwPTI6fmtNK4pYxalGohIZBfPpcXtcWO4JHTlMf23Jy4Wt/28XSv+ksAZqcFiAlqgF/DbpvGtrKwXHuDvgzzaidFe3+luh+s4OKplhflaxns2LFKopWot0qLzFwR006TA9puANh1apT8dDqNSnk/l5zxcvDce56e3i5plNZe1bsDge8w+IB1VaxUA7WyqSPTxTJ9quyT4QNiUZWw/eAW2ZC5NltsR5/Kej/AGaUf+iY/wDcr1D7A5f9syX2p49nanhqf+ChzMfz1Nh7C59SfIT0SfZHny/vdMPhaxt1Km/t/d57F9nvFLrkJuAoY/o2zeotr5fpAnj1Cjrp0N/QjnPQvswqftqC/wANS/6SgNvkJxydZ6exrJqMgoiygdABJ6M3HBcpyflIKcscppBTkkjpySBKuwg0F2g0BhiRTElAYySRhgJEiwhFmEIQ0SLEiwEhFhASEWEAkVc7SWV6jaxEricRxHd1iT+FgL/19pw8cpV2B1DX163nT49/ie05dRsyWO6ae3KdYyqYNs1Mr+ViPjrFpHS0i4Z+KoOpvExjZMx2ABPwlSsx9oGMSnhnps6hmZWQXF8ysDoPaaDgHEqWJpBqbhgNCAdQehHKY7s1w8YnNjq9mqV3OTNrkpgkKFHoJ1uP4JMCaWPw4ymmQtdVFhUoE2YlfzC9wZD9NrhWBBQ+oi0RlJU6qQQQdip3EqLUuA6m+xFuYMuAhxfmBf8ArKOZguGDC06mHpfgGcprsjsWtfrrb2mB7Z8LdqlI28BRgD/GLHL62ufaep0yCV8wV/mP5yhjOHpVV6TqCrjn1GoPkfOZuMs01MtXbwLG0npPlYWBBt530vNt9l2IC4wK3OnYf+AJlvtt2aIw7NfMaJLIx/Fl3am556C4by16nKdl8QadfD1QfwuAfT+zOGc0743b6LWS0ZUwFbPTRuo19RoZbpQ5LlOWBtK9OWBNISnJZFTkkCZDpBoJtBoDDEEUxBKFjWiwMBkIsIRZjcw6x0pVlIJHKRbdLkJSWqRJVxEujyWIRi1hHhgZF2IRYQIMSxAJAuRy6ygmIDEEHSdB2tMzxHw1WamdL6gbHrN4s03jjA1NDfQbdZzSvP4yZqwck/KOSlcgdTNDmYakQzHle0rdqKJ7iqV3NNvoZ26lNUJFjrDIGBXeaSsL9nOFFTD0wwIKqVseRU2P0ml7RcO7zCV6aLeoaZygbk9B7SbhNEU6ldf4yR6En+VpbxD2hmuH2WR1wmGSoCKiUUVgdwQANfhOnRYq1vO4kGEBAtzF/hfSSGoDa+jAwrqKBpbbTblzjKy63HWJTbT0jKrWMiq3FsEKtKtTOz0yPfcfOeEYJCneLzp1CoPmGIB+U9/rN4GPQGeFFQalbL+F6rfNj/Wceb07cL2/sPjxXwtJxvls3k43/kZpKW88h+zrib4PG1cFW0WqFZb7ZrDKw8iPp5T16lOeKZztcpycSCnLAnRg2nJJHTksCVNoNBNoGAwxBFMBKCEIQG2hFiwJpBil0v0k8RhcWkK58WOKxJWCR2YxIQHiuRJBiP72lYxt5V2gxvfG9gLeunwnH+9Dm1MjyPOd1j579JhuH0jSrYjDlMwuaoJAsBezkk7a2P8Amm5UderQDeICzeXOWeGUruoP96GVsLTJGZR4CeWovzsZ2OF0CXBtooJ+Vv5xa0kx+CVl13HOcc4MqT5maesLgzm1aXyklSs6i5Xa+7EH2IsPmpkVUkkjoJ1cXQu6/wASkX/iXxL9XlXEYMghwNCp+M1tHJZiNfM/Ux2YP5NFqD8S9CbfEylqDaTbcjq0qtrA7nT1ktRhuekp1Coyd4bNuLmx5b/ASDF4khjvbKPr1mZnL6rVwvwZ2o4h3OCxLg2bumC/qPhX5kTzDgWEFeph6VNfEbM515EsSb7b5fad/tpjGxRGEpMqoGvUZ728JsFA56gn2Et9lOGLhmGRma6/4gXQnmpO1tLyZ47rWF1Fz7Q+HkJg8bTW1XDBabkc1FivsDm+M9J4RiVq0qVVTdalNWHoROIlIYhKlBhpURhfXe3SdrhGAFBTTX/DDEqPyg6kel7/ABmMpqpvc06tKTiQ05OJWDUkkYsV2tbzMCdNoGCbQc21gMgIKwIuDcHpAShYkWEBIRYQJYQhIqvXXW/WQGXKy3HpKjSximxCY1mjCZUOLRt4hMbeEKTODxen3eIoV72UsEf9DaG/+k+07hlLi+GFWk6np/8AZYOnWoLbchRyWTYanZdBYHlz95S7O1++oU8xu6+F/wBSGx+Nr+86rrf0itxAVvr/AGZUxlVaSl3YKg1JY2AHmTJcRieS/GeddsalfFOiFHGHRxuCLkm2cra4Ftrjqecxnn4zbXHh5XTRYrj+HKUXDH9o+anobsFNibbgEFgL9ZfHE8ORfvAPJgR9RMDVxA+8lt6dICmg/KqCwsPW/wAZ08Vig9OyAZiflPJfqcpa9U+mxsi9WpKwRkYFmF2A5MdSDLODwq5tgWtqbbe/KVeGppbN8J0KTpT8+dzvc9Y/lyznazDHH0zfHSz1XAZSF0y7D2PWcwFlH76db+NfiNviZd4o2EzsatVUYknSoUI+Bt8ZSyBgGw9fOo18TKwPo6DT3BnHxr1RZwNKmWOVFWqwLXCiz8yQbaneaPg7ulQUatmp1b925UKyuASaT20bQMQ2/hIPInMJUKutltazlLjlfxUmHpsPP0mg/wCrqCjU7kMislQdzUXM1tRdagUDf8xnp4fJ5vqJjJ20dLCKjBgOolmnM5xPtaKCqXweJFSpUWmiZF8VRiAo7wMUFz5zqYehiWs1RqSn8gVqgX/NmW587T05SvDK7NMjrJwdJlsfxbG0ahpJhqVYCi1XvM7UgAhAZCmVzm8S2sbG/K0v08Kz00NRgarqCTbwAkXsqbWF99+pk1YbXsFxFKlx+FgbWbQ6SpW4vRao1I1ApTTe2pGlj11mN41g1FUk1T3hUgBDbbTTpMnWpPhMQBXZ+7LBvEbsed7icvLL8xny29Jbj9fDKaZUMytu25T++c7b8bpkUiDpVtcdL6Wnnb8Ro4l1C1tDa+Y6gTrY/EoporhStSpSYMVDC2Uc2PKMLd3tN12ScfTarhsOiZQ11qVDoqNrlC8yNp2Oz9VmpeOqKjhmVmWwGYGxAtMdxPH4xaT1ar0lGa5Wk5zk8kHoJY7NccpUsNVanqzXZRyL2tby1m/KS6qyt13gvluL9OcdMR2IqE1Kj4hya9T8N9su5tNvLjdzbUohCE0qWEI12kU4znVtCRLsq45dm9pYzkrExpMQmNvNMHXiXiXiXhNnXjTC8SUUuzz9ziK1I7VBnXU/iWwIA22yn2M0VdxlIJsOsxvafvaa9/QfJVpi4YANtuMp0N1vOlh+1mHKLmZi2QXOQWY2FyLGwvLcd9tTL8Lz4bxWFQ6g7WuOh15bzh4/CEVH0Y3t4jz6ZbaxcR2uoK2ZaLkjS5KA28hc33lfDcSwdQsadcUme1xWBGxJ3vl/ePOS4/Jtzq/Z9MRUDKCjZyGJJKtYXuwBGp+OmsuUuxyj9+36M/8AN7fKdbh3CFQeGsGGh8Hpa97nkJ1KdC2mbWc7x4/DpOTLXtwl7P1FFkxFv1UwfoRKdXsvWfP3mI7xShAWxprmOxJUkm2unnNeFi5ZP48fhqc2Uu9sOOwYdMMh7ladBQGTIzrUNtS1yN2u31vHf/nVM1RWNbLYEZaSKq689bm/S02y6GSu6jUsB6kCWcePw1fqOS/lm8J2Pw1Ng/iZwLBnJJA8uQ3M7NHBIgCrsoAHoNBHjiFAmwrU7jo6/wBYpxtP84PprNzUcsrll7VuJYTOlgtyjpUUdWpsrgDzOW3vJkxVIjN3i28yBY9CDqD5HWUD2hpmoaa03bKxDMuWymwIut82txyiVuJ0c2Y0GzD95qZuPexMWxnVU8XxVBVay30ynPcDLz9yf/UTm/8AHK6gU6aqUpJluTyGgJPW1p1cTxegVN1U8rMFRrn9TX+UyPFqDIjWbwObgabchpuJxzys/LGUsczFuauLpMHutrNl2A3lftlh8+VlcnKCAGt10lFad6iFGKOOQ/CfWGOqvUcgU2AU2JtpOFzu+iIezmEAqsahvZRoNrmanEcAoVFZu/NAkEswJFx+WwkXZvAUqdGpUYZqz6W/L0mI7YcVqn9kWKhW5HfyjGfds7tS/eaSV6K0GLgHxZtPHfXU7zXUsSijICFV3Go/dLHUn0nn3Z3hr1aqrbwH946WM0PEg9GoaTL4VGltiJOT301Y9SxlLD4agppOXr6WZWub8ybcp0OC4upTolqjXrVCSFY6iw3PQDeeadnsdUqtZbWQXIGg02En4FxKtXxVSm4ApurI9TU5FO5B620m5b57I2p7akaJRLqNA+vitufjeE7+AweHpU0p0wuRRpz873iTp45f6V24x4QnVoAxlcZlI8vnCEg5N40mLCdHEl4XhCAl4XhCBBjaeZGHlMZRxWGp5qNaiyd0wQVKTXuDYqWQ87EbRITeJFr/AIL36lsPUFQWvYgowH+bT5zPYvCNTJU6Eeh+kSE1GkdPiNak4enUZLKq+BiAcvUbH3nYwfbatTfPUpJUa2UtbI+XTTMunIcuUISK1vDO2GHrWDK9NjyYZhfyK3+YE0KsCLjYxITnYFtG1aKsLMoYdGAMITIo43hAqG4rVU8qbAD5gyn/AMuUz+KtiG9a7j/1tCEnjPhqZUf8r4U/iFRv1Vqx/wB0cOyGB54dT+os31MSEuoeV+U6dmsGPw4Wl7ov8xIOO4LJS/Z0kLbC4AA+cISWM5enlWJoYmrWdbqpUG4AAA9LSfBYplpDD1Wu4bQgdTbWEJ497zuNZrq4jhlWgVai9hl8QbUGZrtFhFekzVEF73uN7whGV1yahHAwGKd3Sncqt7Arymx4PgHvUas/eZFyrm6GEJcrqzTdcPhAajX8DHOzlQg0UgnS5M7BfIayis1Oqit3oUXU7EICN78zCExu+xbwfaEhFF20HImEIR50f//Z" alt="full profile avi" className="rounded-lg largeProfPic" />
                <br/>
                <br/>
                <div className="card" style={{width: 350}}>
                <div class="card-body">
                <h2>Dr. Kahla Nizhisht</h2>
                    </div>

                </div>
            </div>
        </div>
        </>)
    }

export default LargeProfilePic;