import styled from 'styled-components';

export const CardWrapper = styled.div`
.card {
    border: 8px solid #382369;
    width: -webkit-fill-available;
    height: 15pc;
    padding: 1pc;
    border-radius: 20px;
    margin: 20px;
}
    a.card_link{
        color: #000;
    }
    img {
    float: left;
    width: 20pc;
    height: 12pc;
    border-radius: 1pc;
    margin-right: 1pc;
}

h1.a2 {
    color: #9340ff;
    font-weight: 900;
}
p.a2 {
    color: white;
    font-size: 16px;
    padding-top: 2pc;
    margin-bottom: 5px;
}
a.card_link {
    color: #9340ff;
    color: #ffffff;
    text-decoration: underline;
    text-transform: uppercase;
    transition: .3s cubic-bezier(0.65, 0.05, 0.36, 1);
    font-weight: 900;
    text-decoration-color: #9340ff;
    letter-spacing: 2px;
}
a.card_link:hover {
    transition: .3s ease-in-out;
    letter-spacing: 5px;
    font-weight: 900;
} 
@media screen and (max-width: 700px) {
    .card {
    border: 8px solid #382369;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    padding: 1pc;
    border-radius: 20px;
    margin: 20px;
}
img {
    float: left;
    width: 15pc;
    height: 12pc;
    border-radius: 1pc;
    margin-right: 1pc;
}
}

    `;