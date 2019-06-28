import React from 'react';
import './home.css'

import Contact from '../Contact'

class Home extends React.Component<{children: any, params: any}, {}> {
    render(){
        return (
            <div className="home-page">
                <h3>Главная</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, est odit et distinctio consequatur a deleniti, provident, neque maiores velit vitae fugiat tenetur repellendus ratione aperiam voluptatum recusandae at. Quam?
                    Error sint animi cum. Magnam illo similique rem dignissimos vero, facere quis id provident, laudantium sit sunt, ipsum veniam corporis quae qui illum quidem atque ratione cupiditate quam saepe adipisci?
                    Doloremque dignissimos voluptatem ratione? Eos repellat illum repudiandae fuga, nostrum quidem. Autem consectetur architecto voluptatum consequuntur eveniet! Dolor alias laboriosam non! Corporis enim minima quisquam inventore incidunt nihil dignissimos explicabo?
                    Sint corporis nesciunt esse deserunt. Accusamus corrupti cum inventore nihil atque reprehenderit veniam harum officiis aliquam ratione possimus recusandae, culpa accusantium ducimus repellendus sint doloribus suscipit odio voluptatum totam? Dignissimos?
                    Laboriosam non ipsum possimus doloribus neque earum odio quis ullam, quia incidunt dolorem voluptas rem esse alias similique quaerat magni cupiditate ea tenetur architecto doloremque quo ducimus temporibus. Voluptates, sit.
                    Nobis reprehenderit molestias labore sed esse ab inventore delectus ratione iure eius blanditiis officia a quas rerum provident nulla perspiciatis deleniti, facere itaque facilis soluta aliquid doloribus voluptatem officiis! Quas.
                    Sed, modi esse. Doloremque possimus ipsa perferendis alias blanditiis ab? Eaque fuga vel molestiae sint accusantium doloremque eius laboriosam necessitatibus? Autem accusantium soluta id non vitae eligendi sapiente ullam cumque?
                    Odio quam assumenda quia recusandae sequi expedita cumque quos labore voluptatibus, ipsa veniam magni voluptate harum excepturi velit fugiat. Enim molestias ipsum libero nihil! Cum odit sunt dolorem? Odio, deserunt?
                    Mollitia earum soluta explicabo quam eos sapiente quae cupiditate temporibus iusto deleniti voluptatum, unde ex neque totam! Non, maxime culpa recusandae voluptatum nostrum illum, omnis cumque incidunt consequuntur eligendi et.
                    Repudiandae magnam maiores aliquid commodi, a molestias exercitationem dignissimos sapiente aspernatur porro animi, totam, ea minus ratione accusantium? Dicta ut suscipit asperiores dolorum, aliquam sit architecto vel numquam incidunt corrupti.
                </p>
                <main>
                    <aside>
                        <input type="text" /><br />
                        <input type="submit" />
                        <Contact />
                    </aside>
                    {this.props.children}
                </main>
            </div>
        )
    }
};
export default Home