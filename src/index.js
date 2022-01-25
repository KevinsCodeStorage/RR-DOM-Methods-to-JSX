let koalaContainer = <div className="ui items"></div>

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div className='item'></div>
    koalaCard.style.cursor = 'pointer';

    // Koala Card Image
    let imageContainer = <div className='image'><img src= {koala.imageURL}></img></div>


    // Koala Card Content
    let koalaContent = <div></div>
    koalaContent.setAttribute('class', 'content')

    let header = <div></div>
    header.setAttribute('class', 'header')
    header.append(koala.name)

    let descriptionParagraph = document.createElement('p')
    descriptionParagraph.append(koala.description)

    let descriptionContainer = <div></div>
    descriptionContainer.setAttribute('class', 'description')
    descriptionContainer.append(descriptionParagraph)

    koalaContent.append(
        header,
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)