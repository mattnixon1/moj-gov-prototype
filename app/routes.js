//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Add your routes here
router.post('/community/submit-new-component', (req, res) => {
    res.redirect('/community/add-new-component/start');
});

router.post('/community/add-new-component/start', (req, res) => {
    res.redirect('/community/add-new-component/component-details');
});

router.post('/community/add-new-component/component-details', (req, res) => {
    res.redirect('/community/add-new-component/share-findings');
});

router.post('/community/add-new-component/share-findings', (req, res) => {
    if (req.session.data['share-findings'] === 'yes') {
        res.redirect('/community/add-new-component/add-findings');
    } else {
        res.redirect('/community/add-new-component/share-link');
    }
});

router.post('/community/add-new-component/add-findings', (req, res) => {
    res.redirect('/community/add-new-component/share-link');
});

/*
router.post('/community/add-new-component/component-screenshot', (req, res) => {
    // grab the image in the form and convert it into a base64 string
    const image = req.files['component-screenshot']

    // take the image and convert it into a base64 string
    const imageBase64 = image.data.toString('base64')

    // store the base64 string in the session
    req.session.data['component-screenshot'] = imageBase64


    res.redirect('/community/add-new-component/share-findings');
});
*/


router.post('/community/add-new-component/component-screenshot', upload.single('component-screenshot'), (req, res) => {
    if (req.file) {
        const filename = req.file.originalname;
        const base64Image = req.file.buffer.toString('base64');
        req.session.data.base64Image = base64Image;
        req.session.data['component-screenshot'] = filename;

        console.log(base64Image)
        res.redirect('/community/add-new-component/additional-info');
    } else {
        //res.status(400).send('No file uploaded.');
        res.redirect('/community/add-new-component/additional-info');
    }
});

router.get('/spinner', (req, res) => {
    const base64Image = req.session.base64Image || '';
    res.render('spinner', { base64Image });
});


router.post('/community/add-new-component/share-link', (req, res) => {
    if (req.session.data['share-link'] === 'yes') {
        res.redirect('/community/add-new-component/add-link');
    } else {
        res.redirect('/community/add-new-component/share-code');
    }
});

router.post('/community/add-new-component/add-link', (req, res) => {
    res.redirect('/community/add-new-component/share-code');
});

router.post('/community/add-new-component/share-code', (req, res) => {
    if (req.session.data['share-code'] === 'yes') {
        res.redirect('/community/add-new-component/add-code');
    } else {
        if (req.session.data['flow'] == 'existing') {
            res.redirect('/community/add-new-component/additional-info');
        } else {
            res.redirect('/community/add-new-component/component-screenshot');
        }
    }
});

router.post('/community/add-new-component/add-code', (req, res) => {
    if (req.session.data['flow'] == 'existing') {
        res.redirect('/community/add-new-component/additional-info');
    } else {
        res.redirect('/community/add-new-component/component-screenshot');
    }
});


router.post('/community/add-new-component/additional-info', (req, res) => {
    res.redirect('/community/add-new-component/user-details');
});

router.post('/community/add-new-component/user-details', (req, res) => {
    res.redirect('/community/add-new-component/check-your-answers');
});

router.post('/community/add-new-component/check-your-answers', (req, res) => {
    req.session.data['add-component'] = "complete";
    res.redirect('/community/add-new-component/confirmation');
});








// ADD TO EXISTING COMPONENT

router.post('/community/add-new-component/component-owner', (req, res) => {
    res.redirect('/community/add-new-component/component-details');
});


// ADD CODE

router.post('/community/add-code/add-code', (req, res) => {
    res.redirect('/community/add-code/share-more');
});

router.post('/community/add-code/share-more', (req, res) => {
    res.redirect('/community/add-code/user-details');
});

router.post('/community/add-code/user-details', (req, res) => {
    res.redirect('/community/add-code/check-your-answers');
});

router.post('/community/add-code/check-your-answers', (req, res) => {
    res.redirect('/community/add-code/confirmation');
});


/*
router.post('/community/add-to-existing-component/share-code', (req, res) => {
    if (req.session.data['share-code'] === 'yes') {
        res.redirect('/community/add-to-existing-component/add-code');
    } else {
        res.redirect('/community/add-to-existing-component/share-link');
    }
});

router.post('/community/add-to-existing-component/add-code', (req, res) => {
    res.redirect('/community/add-to-existing-component/share-link');
});

router.post('/community/add-to-existing-component/share-link', (req, res) => {
    if (req.session.data['share-link'] === 'yes') {
        res.redirect('/community/add-to-existing-component/add-link');
    } else {
        res.redirect('/community/add-to-existing-component/share-findings');
    }
});

router.post('/community/add-to-existing-component/add-link', (req, res) => {
    res.redirect('/community/add-to-existing-component/share-findings');
});

router.post('/community/add-to-existing-component/share-findings', (req, res) => {
    if (req.session.data['share-findings'] === 'yes') {
        res.redirect('/community/add-to-existing-component/add-findings');
    } else {
        res.redirect('/community/add-to-existing-component/additional-info');
    }
});

router.post('/community/add-to-existing-component/add-findings', (req, res) => {
    res.redirect('/community/add-to-existing-component/additional-info');
});

router.post('/community/add-to-existing-component/additional-info', (req, res) => {
    res.redirect('/community/add-to-existing-component/check-your-answers');
});

router.post('/community/add-to-existing-component/check-your-answers', (req, res) => {
    res.redirect('/community/add-to-existing-component/confirmation');
});
*/
