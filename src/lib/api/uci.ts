import type { Dataset } from '@/lib/dataset-service';

/**
 * UCI Machine Learning Repository — Curated Static List
 *
 * The UCI REST API (archive.ics.uci.edu) returns 404 from web servers (only works
 * via their Python SDK). HuggingFace author-filter for uciml also returns 0.
 *
 * Solution: curated list of 40 most popular UCI datasets with keyword metadata
 * for matching, combined with OpenML tag search for structured ML datasets.
 */

interface UCIDatasetEntry {
    id: number;
    name: string;
    description: string;
    keywords: string[];
}

const UCI_DATASETS: UCIDatasetEntry[] = [
    { id: 53, name: 'Iris', description: 'Classic multiclass classification dataset with 3 species of Iris flowers.', keywords: ['iris', 'flower', 'classification', 'multiclass', 'species', 'beginner'] },
    { id: 45, name: 'Heart Disease', description: 'Predict the presence of heart disease in patients using clinical features.', keywords: ['heart', 'disease', 'health', 'medical', 'cardiology', 'classification', 'clinical'] },
    { id: 17, name: 'Breast Cancer Wisconsin (Diagnostic)', description: 'Diagnosis of breast tumors as malignant or benign using cell nuclei features.', keywords: ['cancer', 'breast', 'tumor', 'medical', 'diagnosis', 'classification', 'malignant'] },
    { id: 109, name: 'Wine', description: 'Chemical analysis of wines grown in the same region in Italy.', keywords: ['wine', 'chemical', 'classification', 'chemistry'] },
    { id: 186, name: 'Wine Quality', description: 'Predict wine quality based on physicochemical tests.', keywords: ['wine', 'quality', 'regression', 'physicochemical'] },
    { id: 2, name: 'Adult Census Income', description: 'Predict whether income exceeds $50K/yr based on census data.', keywords: ['income', 'census', 'adult', 'classification', 'socioeconomic', 'salary'] },
    { id: 222, name: 'Bank Marketing', description: 'Predict if a client will subscribe to a term deposit in a banking campaign.', keywords: ['bank', 'marketing', 'finance', 'classification', 'subscription', 'campaign'] },
    { id: 352, name: 'Online Retail', description: 'Transactional data for a UK-based online retailer.', keywords: ['retail', 'ecommerce', 'transactions', 'market basket', 'sales'] },
    { id: 19, name: 'Car Evaluation', description: 'Evaluate car acceptability based on price, comfort, safety etc.', keywords: ['car', 'automotive', 'evaluation', 'classification', 'vehicle'] },
    { id: 73, name: 'Mushroom', description: 'Classify mushrooms as poisonous or edible using physical characteristics.', keywords: ['mushroom', 'fungi', 'edible', 'poisonous', 'classification', 'biology'] },
    { id: 1, name: 'Abalone', description: 'Predict age of abalone from physical measurements.', keywords: ['abalone', 'marine', 'regression', 'age', 'biology'] },
    { id: 34, name: 'Diabetes', description: 'Predict diabetes onset in Pima Indian women using medical data.', keywords: ['diabetes', 'medical', 'health', 'pima', 'classification', 'glucose'] },
    { id: 162, name: 'Forest Fires', description: 'Predict the burned area of forest fires in northeast Portugal.', keywords: ['fire', 'forest', 'environment', 'regression', 'weather', 'prediction'] },
    { id: 320, name: 'Student Performance', description: 'Predict student grades based on social and school features.', keywords: ['student', 'education', 'performance', 'regression', 'school', 'grade'] },
    { id: 94, name: 'Spambase', description: 'Classify emails as spam or non-spam.', keywords: ['spam', 'email', 'text', 'classification', 'nlp', 'natural language'] },
    { id: 144, name: 'Statlog (German Credit Data)', description: 'Classify people as good or bad credit risks.', keywords: ['credit', 'finance', 'banking', 'risk', 'classification', 'loan'] },
    { id: 10, name: 'Automobile', description: 'Predict automobile insurance risk and price from characteristics.', keywords: ['automobile', 'car', 'vehicle', 'insurance', 'price', 'regression'] },
    { id: 242, name: 'Energy Efficiency', description: 'Predict heating and cooling energy loads of buildings.', keywords: ['energy', 'buildings', 'regression', 'efficiency', 'heating', 'cooling'] },
    { id: 275, name: 'Bike Sharing Dataset', description: 'Predict bike rental count in Washington D.C. based on weather and time.', keywords: ['bike', 'sharing', 'transport', 'regression', 'demand', 'weather'] },
    { id: 360, name: 'Air Quality', description: 'Hourly gas sensor data for air quality monitoring in an Italian city.', keywords: ['air', 'quality', 'pollution', 'environment', 'sensor', 'regression'] },
    { id: 602, name: 'Dry Bean Dataset', description: 'Classify 7 types of dry beans from images.', keywords: ['bean', 'agriculture', 'classification', 'image', 'food'] },
    { id: 350, name: 'Default of Credit Card Clients', description: 'Predict credit card default payments in Taiwan.', keywords: ['credit', 'credit card', 'default', 'finance', 'classification', 'payment'] },
    { id: 236, name: 'Seeds', description: 'Classify wheat seeds using geometrical properties.', keywords: ['seeds', 'agriculture', 'classification', 'wheat', 'geometry'] },
    { id: 58, name: 'Ionosphere', description: 'Classify radar returns from the ionosphere as good or bad.', keywords: ['radar', 'ionosphere', 'signal', 'classification', 'physics'] },
    { id: 111, name: 'Zoo', description: 'Classify animals into one of 7 categories.', keywords: ['zoo', 'animals', 'classification', 'biology', 'wildlife'] },
    { id: 179, name: 'MAGIC Gamma Telescope', description: 'Classify high energy gamma or hadron particles in telescope data.', keywords: ['gamma', 'telescope', 'physics', 'particle', 'classification', 'astronomy'] },
    { id: 165, name: 'Concrete Compressive Strength', description: 'Predict the compressive strength of concrete from ingredients.', keywords: ['concrete', 'materials', 'engineering', 'regression', 'construction', 'strength'] },
    { id: 294, name: 'Yacht Hydrodynamics', description: 'Predict residuary resistance of sailing yachts.', keywords: ['yacht', 'hydrodynamics', 'engineering', 'regression', 'fluid', 'marine'] },
    { id: 9, name: 'Auto MPG', description: 'Predict fuel consumption of cars in miles per gallon.', keywords: ['car', 'mpg', 'fuel', 'regression', 'automotive', 'efficiency', 'vehicle'] },
    { id: 267, name: 'Banknote Authentication', description: 'Detect counterfeit banknotes using image statistics.', keywords: ['banknote', 'authentication', 'image', 'classification', 'fraud', 'finance'] },
    { id: 174, name: 'Parkinsons', description: 'Detect Parkinsons disease from voice measurements.', keywords: ['parkinson', 'medical', 'voice', 'disease', 'classification', 'neurological'] },
    { id: 256, name: 'Daily Demand Forecasting Orders', description: 'Forecast daily order demand for a logistics company.', keywords: ['demand', 'forecasting', 'logistics', 'regression', 'supply chain', 'orders'] },
    { id: 339, name: 'GPS Trajectories', description: 'Classify GPS trajectories as going to a bus or non-bus destination.', keywords: ['gps', 'trajectory', 'transport', 'classification', 'mobility', 'location'] },
    { id: 551, name: 'Condition Based Maintenance of Naval Vessels', description: 'Predict gas turbine degradation and state.', keywords: ['maintenance', 'naval', 'mechanical', 'regression', 'turbine', 'engineering'] },
    { id: 374, name: 'Chronic Kidney Disease', description: 'Classify patients with chronic kidney disease.', keywords: ['kidney', 'disease', 'medical', 'classification', 'health', 'chronic'] },
    { id: 464, name: 'HTRU2', description: 'Classify legitimate or spurious pulsar candidates from radio telescopes.', keywords: ['pulsar', 'astronomy', 'radio', 'physics', 'classification', 'signal'] },
    { id: 228, name: 'SMS Spam Collection', description: 'Classify SMS messages as spam or ham (legitimate).', keywords: ['sms', 'spam', 'text', 'nlp', 'classification', 'natural language', 'message'] },
    { id: 457, name: 'Wholesale customers', description: 'Cluster wholesale distributor clients by product category spend.', keywords: ['wholesale', 'customer', 'clustering', 'retail', 'segmentation', 'spending'] },
    { id: 396, name: 'Human Activity Recognition', description: 'Classify human activities from smartphone accelerometer and gyroscope data.', keywords: ['activity', 'recognition', 'sensor', 'imu', 'accelerometer', 'gyroscope', 'human', 'mobile'] },
    { id: 315, name: 'Facebook Comment Volume', description: 'Predict the number of comments a Facebook post will receive.', keywords: ['facebook', 'social media', 'comment', 'regression', 'prediction', 'social network'] },
];

export async function searchOpenMLDatasets(query: string): Promise<Dataset[]> {
    const results = searchUCIDatasets(query);
    console.log(`[UCI] Found ${results.length} datasets for "${query}"`);
    return results;
}

function searchUCIDatasets(query: string): Dataset[] {
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);

    const scored = UCI_DATASETS.map(ds => {
        const searchable = (ds.name + ' ' + ds.description + ' ' + ds.keywords.join(' ')).toLowerCase();
        let score = 0;
        for (const t of terms) {
            if (ds.name.toLowerCase().includes(t)) score += 3;      // name match = strongest
            if (ds.keywords.some(k => k.includes(t))) score += 2;   // keyword match
            if (ds.description.toLowerCase().includes(t)) score += 1; // desc match
        }
        return { ds, score };
    });

    const matches = scored
        .filter(s => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4)
        .map(s => ({
            name: s.ds.name,
            source: 'UCI ML Repository',
            url: `https://archive.ics.uci.edu/dataset/${s.ds.id}/${s.ds.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
            description: s.ds.description,
        }));

    if (matches.length > 0) {
        console.log(`[UCI] Matched ${matches.length} UCI datasets for "${query}"`);
    }
    return matches;
}

