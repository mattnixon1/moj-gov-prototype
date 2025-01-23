//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/community/submit-new-component', (req, res) => {
    res.redirect('/community/add-new-component/start');
});

router.post('/community/add-new-component/start', (req, res) => {
    res.redirect('/community/add-new-component/component-details');
});

router.post('/community/add-new-component/component-details', (req, res) => {
    res.redirect('/community/add-new-component/component-screenshot');
});

router.post('/community/add-new-component/component-screenshot', (req, res) => {
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
        res.redirect('/community/add-new-component/additional-info');
    }
});

router.post('/community/add-new-component/add-code', (req, res) => {
    res.redirect('/community/add-new-component/additional-info');
});


router.post('/community/add-new-component/additional-info', (req, res) => {
    res.redirect('/community/add-new-component/user-details');
});

router.post('/community/add-new-component/user-details', (req, res) => {
    res.redirect('/community/add-new-component/check-your-answers');
});

router.post('/community/add-new-component/check-your-answers', (req, res) => {
    res.redirect('/community/add-new-component/confirmation');
});



// ADD TO EXISTING COMPONENT



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

