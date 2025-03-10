//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

/* VERSION 2 START */

router.post('/v2/community/submit-new-component', (req, res) => {
    res.redirect('/v2/community/add-new-component/start');
});

router.post('/v2/community/add-new-component/start', (req, res) => {
    res.redirect('/v2/community/add-new-component/component-details');
});

router.post('/v2/community/add-new-component/component-details', (req, res) => {
    res.redirect('/v2/community/add-new-component/share-findings');
});

router.post('/v2/community/add-new-component/share-findings', (req, res) => {
    if (req.session.data['share-findings'] === 'yes') {
        res.redirect('/v2/community/add-new-component/add-findings');
    } else {
        res.redirect('/v2/community/add-new-component/share-link');
    }
});

router.post('/v2/community/add-new-component/add-findings', (req, res) => {
    res.redirect('/v2/community/add-new-component/share-link');
});

router.post('/v2/community/add-new-component/component-screenshot', upload.single('component-screenshot'), (req, res) => {
    if (req.file) {
        const filename = req.file.originalname;
        const base64Image = req.file.buffer.toString('base64');
        req.session.data.base64Image = base64Image;
        req.session.data['component-screenshot'] = filename;

        console.log(base64Image)
        res.redirect('/v2/community/add-new-component/additional-info');
    } else {
        res.redirect('/v2/community/add-new-component/additional-info');
    }
});

router.get('/spinner', (req, res) => {
    const base64Image = req.session.base64Image || '';
    res.render('spinner', { base64Image });
});

router.post('/v2/community/add-new-component/share-link', (req, res) => {
    if (req.session.data['share-link'] === 'yes') {
        res.redirect('/v2/community/add-new-component/add-link');
    } else {
        res.redirect('/v2/community/add-new-component/share-code');
    }
});

router.post('/v2/community/add-new-component/add-link', (req, res) => {
    res.redirect('/v2/community/add-new-component/share-code');
});

router.post('/v2/community/add-new-component/share-code', (req, res) => {
    if (req.session.data['share-code'] === 'yes') {
        res.redirect('/v2/community/add-new-component/add-code');
    } else {
        if (req.session.data['flow'] == 'existing') {
            res.redirect('/v2/community/add-new-component/additional-info');
        } else {
            res.redirect('/v2/community/add-new-component/component-screenshot');
        }
    }
});

router.post('/v2/community/add-new-component/add-code', (req, res) => {
    if (req.session.data['flow'] == 'existing') {
        res.redirect('/v2/community/add-new-component/additional-info');
    } else {
        res.redirect('/v2/community/add-new-component/component-screenshot');
    }
});

router.post('/v2/community/add-new-component/additional-info', (req, res) => {
    res.redirect('/v2/community/add-new-component/user-details');
});

router.post('/v2/community/add-new-component/user-details', (req, res) => {
    res.redirect('/v2/community/add-new-component/check-your-answers');
});

router.post('/v2/community/add-new-component/check-your-answers', (req, res) => {
    req.session.data['add-component'] = "complete";
    res.redirect('/v2/community/add-new-component/confirmation');
});

// ADD TO EXISTING COMPONENT

router.post('/v2/community/add-new-component/component-owner', (req, res) => {
    res.redirect('/v2/community/add-new-component/component-details');
});

// ADD CODE

router.post('/v2/community/add-code/add-code', (req, res) => {
    res.redirect('/v2/community/add-code/share-more');
});

router.post('/v2/community/add-code/share-more', (req, res) => {
    res.redirect('/v2/community/add-code/user-details');
});

router.post('/v2/community/add-code/user-details', (req, res) => {
    res.redirect('/v2/community/add-code/check-your-answers');
});

router.post('/v2/community/add-code/check-your-answers', (req, res) => {
    res.redirect('/v2/community/add-code/confirmation');
});

/* VERSION 2 END */



/* VERSION 3 START */

router.post('/v3/community/submit-new-component', (req, res) => {
    res.redirect('/v3/community/add-new-component/start');
});

router.post('/v3/community/add-new-component/start', (req, res) => {
    res.redirect('/v3/community/add-new-component/component-details');
});

router.post('/v3/community/add-new-component/component-details', (req, res) => {
    res.redirect('/v3/community/add-new-component/component-screenshot');
});

router.post('/v3/community/add-new-component/share-findings', (req, res) => {
    if (req.session.data['share-external-audit'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-external-audit');
    } else if (req.session.data['share-internal-audit'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-internal-audit');
    } else if (req.session.data['share-assistive-tech'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-assistive-tech');
    } else {
        res.redirect('/v3/community/add-new-component/share-prototype');
    }
});

router.post('/v3/community/add-new-component/add-external-audit', (req, res) => {
    if (req.session.data['share-internal-audit'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-internal-audit');
    } else if (req.session.data['share-assistive-tech'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-assistive-tech');
    } else {
        res.redirect('/v3/community/add-new-component/share-prototype');
    }
});

router.post('/v3/community/add-new-component/add-internal-audit', (req, res) => {
    if (req.session.data['share-assistive-tech'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-assistive-tech');
    } else {
        res.redirect('/v3/community/add-new-component/share-prototype');
    }
});

router.post('/v3/community/add-new-component/add-assistive-tech', (req, res) => {
    res.redirect('/v3/community/add-new-component/share-prototype');
});

router.post('/v3/community/add-new-component/share-prototype', (req, res) => {
    if (req.session.data['share-prototype'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-prototype');
    } else {
        res.redirect('/v3/community/add-new-component/share-code');
    }
});

router.post('/v3/community/add-new-component/add-prototype', (req, res) => {
    res.redirect('/v3/community/add-new-component/share-code');
});

router.post('/v3/community/add-new-component/component-screenshot', upload.single('component-screenshot'), (req, res) => {
    if (req.file) {
        const filename = req.file.originalname;
        const base64Image = req.file.buffer.toString('base64');
        req.session.data.base64Image = base64Image;
        req.session.data['component-screenshot'] = filename;

        console.log(base64Image)
        res.redirect('/v3/community/add-new-component/share-findings');
    } else {
        res.redirect('/v3/community/add-new-component/share-findings');
    }
});

router.get('/spinner', (req, res) => {
    const base64Image = req.session.base64Image || '';
    res.render('spinner', { base64Image });
});



router.post('/v3/community/add-new-component/add-link', (req, res) => {
    res.redirect('/v3/community/add-new-component/share-code');
});

router.post('/v3/community/add-new-component/share-code', (req, res) => {
    if (req.session.data['share-code'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-code');
    } else {
        res.redirect('/v3/community/add-new-component/share-figma');
    }
});

router.post('/v3/community/add-new-component/share-figma', (req, res) => {
    if (req.session.data['share-figma'] === 'yes') {
        res.redirect('/v3/community/add-new-component/add-figma');
    } else {
        res.redirect('/v3/community/add-new-component/user-details');
    }
});

router.post('/v3/community/add-new-component/add-figma', (req, res) => {
    res.redirect('/v3/community/add-new-component/user-details');
});

router.post('/v3/community/add-new-component/add-code', (req, res) => {
    if (req.session.data['flow'] == 'existing') {
        res.redirect('/v3/community/add-new-component/additional-info');
    } else {
        res.redirect('/v3/community/add-new-component/share-figma');
    }
});

router.post('/v3/community/add-new-component/additional-info', (req, res) => {
    res.redirect('/v3/community/add-new-component/user-details');
});

router.post('/v3/community/add-new-component/user-details', (req, res) => {
    res.redirect('/v3/community/add-new-component/check-your-answers');
});

router.post('/v3/community/add-new-component/check-your-answers', (req, res) => {
    req.session.data['add-component'] = "complete";
    res.redirect('/v3/community/add-new-component/confirmation');
});

// ADD TO EXISTING COMPONENT - USAGE

router.post('/v3/community/add-component-usage/component-details', (req, res) => {
    res.redirect('/v3/community/add-component-usage/component-screenshot');
});

router.post('/v3/community/add-component-usage/component-screenshot', (req, res) => {
    res.redirect('/v3/community/add-component-usage/user-details');
});

router.post('/v3/community/add-component-usage/user-details', (req, res) => {
    res.redirect('/v3/community/add-component-usage/check-your-answers');
});

router.post('/v3/community/add-component-usage/check-your-answers', (req, res) => {
    res.redirect('/v3/community/add-component-usage/confirmation');
});

// ADD TO EXISTING COMPONENT - ACCESSIBILITY

router.post('/v3/community/add-findings/share-findings', (req, res) => {
    if (req.session.data['share-external-audit'] === 'yes') {
        res.redirect('/v3/community/add-findings/add-external-audit');
    } else if (req.session.data['share-internal-audit'] === 'yes') {
        res.redirect('/v3/community/add-findings/add-internal-audit');
    } else if (req.session.data['share-assistive-tech'] === 'yes') {
        res.redirect('/v3/community/add-findings/add-assistive-tech');
    } else {
        res.redirect('/v3/community/add-findings/user-details');
    }
});

router.post('/v3/community/add-findings/add-external-audit', (req, res) => {
    if (req.session.data['share-internal-audit'] === 'yes') {
        res.redirect('/v3/community/add-findings/add-internal-audit');
    } else if (req.session.data['share-assistive-tech'] === 'yes') {
        res.redirect('/v3/community/add-findings/add-assistive-tech');
    } else {
        res.redirect('/v3/community/add-findings/user-details');
    }
});

router.post('/v3/community/add-findings/add-internal-audit', (req, res) => {
    if (req.session.data['share-assistive-tech'] === 'yes') {
        res.redirect('/v3/community/add-findings/add-assistive-tech');
    } else {
        res.redirect('/v3/community/add-findings/user-details');
    }
});

router.post('/v3/community/add-findings/add-assistive-tech', (req, res) => {
    res.redirect('/v3/community/add-findings/user-details');
});



router.post('/v3/community/add-findings/user-details', (req, res) => {
    res.redirect('/v3/community/add-findings/check-your-answers');
});

router.post('/v3/community/add-findings/check-your-answers', (req, res) => {
    res.redirect('/v3/community/add-findings/confirmation');
});

// ADD TO EXISTING COMPONENT - DESIGN

router.post('/v3/community/add-designs/share-design', (req, res) => {
    res.redirect('/v3/community/add-designs/add-prototype');
});

router.post('/v3/community/add-designs/add-prototype', (req, res) => {
    res.redirect('/v3/community/add-designs/add-figma');
});

router.post('/v3/community/add-designs/add-figma', (req, res) => {
    res.redirect('/v3/community/add-designs/user-details');
});

router.post('/v3/community/add-designs/user-details', (req, res) => {
    res.redirect('/v3/community/add-designs/check-your-answers');
});

router.post('/v3/community/add-designs/check-your-answers', (req, res) => {
    res.redirect('/v3/community/add-designs/confirmation');
});


// ADD TO EXISTING COMPONENT - DESIGN

router.post('/v3/community/add-designs/share-designs', (req, res) => {
    if (req.session.data['share-prototype'] === 'yes') {
        res.redirect('/v3/community/add-designs/add-prototype');
    } else if (req.session.data['share-figma'] === 'yes') {
        res.redirect('/v3/community/add-designs/add-figma');
    } else {
        res.redirect('/v3/community/add-designs/user-details');
    }
});

router.post('/v3/community/add-designs/add-prototype', (req, res) => {
    res.redirect('/v3/community/add-designs/add-figma');
});

router.post('/v3/community/add-designs/add-figma', (req, res) => {
    res.redirect('/v3/community/add-designs/user-details');
});

router.post('/v3/community/add-designs/user-details', (req, res) => {
    res.redirect('/v3/community/add-designs/check-your-answers');
});

router.post('/v3/community/add-designs/check-your-answers', (req, res) => {
    res.redirect('/v3/community/add-designs/confirmation');
});

// ADD TO EXISTING COMPONENT - CODE

router.post('/v3/community/add-code/add-code', (req, res) => {
    res.redirect('/v3/community/add-code/user-details');
});

router.post('/v3/community/add-code/user-details', (req, res) => {
    res.redirect('/v3/community/add-code/check-your-answers');
});

router.post('/v3/community/add-code/check-your-answers', (req, res) => {
    res.redirect('/v3/community/add-code/confirmation');
});

/* VERSION 3 END */