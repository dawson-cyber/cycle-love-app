<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌸 CycleLove - Suivi de cycle complet</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="CycleLove">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">

<!-- Web App Manifest -->
<link rel="manifest" href="manifest.json">

<!-- Theme Color -->
<meta name="theme-color" content="#ff7ab6">
<meta name="msapplication-TileColor" content="#fff0f6">

<link rel="icon" type="image/x-icon" href="icons/favicon.ico">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">

<!-- Viewport pour mobile -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <style>
        :root {
            --primary: #ff7ab6;
            --secondary: #a78bfa;
            --success: #4caf50;
            --warning: #ff9800;
            --danger: #f44336;
            --bg: #fff0f6;
            --card: #ffffff;
            --text: #333333;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: var(--bg);
            color: var(--text);
            min-height: 100vh;
            padding: 20px;
        }
        
        .app-container {
            max-width: 100%;
            background: white;
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .header {
            text-align: center;
            margin-bottom: 25px;
        }
        
        .logo {
            font-size: 50px;
            margin-bottom: 10px;
        }
        
        h1 {
            font-size: 24px;
            margin-bottom: 5px;
        }
        
        .subtitle {
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        input, select, textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #f0f0f0;
            border-radius: 12px;
            font-size: 16px;
        }
        
        .btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 16px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 700;
            width: 100%;
            cursor: pointer;
            margin-top: 10px;
        }
        
        .btn-secondary {
            background: var(--secondary);
        }
        
        .fun-message {
            background: #fff0f6;
            border: 2px solid #ff7ab6;
            border-radius: 10px;
            padding: 12px;
            margin: 10px 0;
            text-align: center;
            color: #d63384;
        }

        .warning-message {
            background: #fff3cd;
            border: 2px solid #ffc107;
            border-radius: 10px;
            padding: 12px;
            margin: 10px 0;
            text-align: center;
            color: #856404;
        }

        /* Classe pour cacher les éléments */
        .hidden {
            display: none !important;
        }
        
        /* Menu Burger */
        .burger-menu {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 10px;
            position: fixed;
            top: 25px;
            left: 25px;
            z-index: 1000;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .burger-line {
            width: 25px;
            height: 3px;
            background: var(--primary);
            margin: 3px 0;
            transition: 0.3s;
        }

        /* Animation pour le menu burger */
        .burger-menu.active .burger-line:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .burger-menu.active .burger-line:nth-child(2) {
            opacity: 0;
        }

        .burger-menu.active .burger-line:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .sidebar {
            position: fixed;
            top: 0;
            left: -300px;
            width: 280px;
            height: 100vh;
            background: white;
            box-shadow: 2px 0 10px rgba(0,0,0,0.1);
            transition: left 0.3s ease;
            z-index: 999;
            padding: 20px;
            overflow-y: auto;
        }
        
        .sidebar.active {
            left: 0;
        }
        
        .sidebar-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 998;
        }
        
        .sidebar-overlay.active {
            display: block;
        }
        
        .sidebar-nav {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 50px;
        }
        
        .sidebar-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 15px;
            border: none;
            background: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            width: 100%;
        }
        
        .sidebar-item:hover {
            background: #fff0f6;
        }
        
        .sidebar-item.active {
            background: var(--primary);
            color: white;
        }
        
        /* Onglets desktop */
        .tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 8px;
        }
        
        .tab {
            padding: 12px 20px;
            border: none;
            background: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            color: var(--text);
            transition: all 0.3s ease;
        }
        
        .tab.active {
            background: var(--primary);
            color: white;
        }
        
        .section {
            display: none;
        }
        
        .section.active {
            display: block;
        }
        
        .card {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
        }
        
        .card h3 {
            margin-bottom: 10px;
            color: var(--primary);
        }
        
        .checkbox-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        
        .checkbox-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .checkbox-item input {
            width: auto;
        }
        
        .calendar {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 5px;
            margin-top: 10px;
        }
        
        .calendar-day {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
        }
        
        .calendar-day.period {
            background: #ff7ab6;
            color: white;
        }
        
        .calendar-day.fertile {
            background: #ffd166;
        }
        
        .calendar-day.ovulation {
            background: #ef476f;
            color: white;
        }
        
        .calendar-day.today {
            border: 2px solid var(--primary);
        }
        
        .reminder-list {
            list-style: none;
        }
        
        .reminder-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .reminder-item:last-child {
            border-bottom: none;
        }
        
        .mood-tracker {
            display: flex;
            justify-content: space-between;
            margin: 15px 0;
        }
        
        .mood-option {
            text-align: center;
            cursor: pointer;
            padding: 10px;
            border-radius: 10px;
            transition: all 0.3s;
        }
        
        .mood-option:hover {
            background: #fff0f6;
        }
        
        .mood-option.selected {
            background: var(--primary);
            color: white;
        }
        
        .phase-indicator {
            display: flex;
            margin: 15px 0;
            border-radius: 10px;
            overflow: hidden;
        }
        
        .phase {
            flex: 1;
            text-align: center;
            padding: 10px 5px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .phase.menstruation {
            background: #ff7ab6;
            color: white;
        }
        
        .phase.follicular {
            background: #a78bfa;
            color: white;
        }
        
        .phase.ovulation {
            background: #ef476f;
            color: white;
        }
        
        .phase.luteal {
            background: #ffd166;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 15px;
        }
        
        .stat-card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .stat-value {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary);
        }
        
        .stat-label {
            font-size: 12px;
            color: #666;
        }

        .alternative-card {
            background: white;
            border-left: 4px solid var(--primary);
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .weight-message {
            font-size: 12px;
            color: #666;
            margin-top: 5px;
            font-style: italic;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .burger-menu {
                display: flex;
            }
            
            .tabs {
                display: none;
            }
            
            .app-container {
                margin-top: 60px;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }

            .mood-tracker {
                flex-direction: column;
                gap: 10px;
            }
        }
        
        @media (min-width: 769px) {
            .burger-menu {
                display: none;
            }
            
            .tabs {
                display: flex;
            }
        }
        /* Dans votre section <style> */
body {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}

/* Assure que le contenu est safe */
.app-container {
    padding-top: max(20px, env(safe-area-inset-top));
    padding-bottom: max(20px, env(safe-area-inset-bottom));
}
    </style>
</head>
<body>
    <!-- Menu Burger (caché au départ) -->
    <div class="burger-menu hidden" id="burger-menu">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
    </div>
    
    <!-- Sidebar -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-nav">
            <button class="sidebar-item active" onclick="switchSection('cycle')">
                <span>📅</span>
                <span>Cycle</span>
            </button>
            <button class="sidebar-item" onclick="switchSection('rappels')">
                <span>🔔</span>
                <span>Rappels</span>
            </button>
            <button class="sidebar-item" onclick="switchSection('amour')">
                <span>❤️</span>
                <span>Amour</span>
            </button>
            <button class="sidebar-item" onclick="switchSection('profil')">
                <span>👤</span>
                <span>Profil</span>
            </button>
        </div>
    </div>

    <!-- Page d'inscription -->
    <div id="inscription-page">
        <div class="app-container">
            <div class="header">
                <div class="logo">🌸</div>
                <h1>CycleLove</h1>
                <p class="subtitle">Ton suivi de cycle personnel</p>
            </div>
            
            <form id="inscription-form">
                <div class="form-group">
                    <label>Prénom</label>
                    <input type="text" id="user-name" placeholder="Ton prénom" required>
                </div>
                
                <div class="form-group">
                    <label>Âge</label>
                    <input type="number" id="user-age" min="12" max="60" placeholder="Ton âge" required>
                </div>

                <div class="form-group">
                    <label>Taille (cm)</label>
                    <input type="number" id="user-height" placeholder="Ex: 165" min="100" max="220">
                    <div class="weight-message">Pour calculer ton IMC et mieux comprendre ton cycle</div>
                </div>

                <div class="form-group">
                    <label>Poids (kg)</label>
                    <input type="number" id="user-weight" placeholder="Ex: 60" min="30" max="200">
                    <div class="weight-message">Je sais que ce n'est pas très bien de demander ça à une femme mais c'est pour t'aider my bad 💕</div>
                </div>
                
                <div class="form-group">
                    <label>Sexe</label>
                    <select id="user-gender" required>
                        <option value="">Choisis ton sexe</option>
                        <option value="feminin">Féminin</option>
                        <option value="masculin">Masculin</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                
                <div id="gender-message" class="fun-message" style="display: none;"></div>

                <!-- Question supplémentaire pour les hommes -->
                <div id="male-question" class="form-group hidden">
                    <label>Tu es un homme, pourquoi utilises-tu cette application ?</label>
                    <select id="male-reason">
                        <option value="">Choisis une option</option>
                        <option value="pour-partenaire">Pour suivre le cycle de ma partenaire</option>
                        <option value="curiosite">Par curiosité</option>
                        <option value="autre-raison">Autre raison</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Premier jour des dernières règles</label>
                    <input type="date" id="last-period" required>
                </div>
                
                <div class="form-group">
                    <label>Durée habituelle du cycle</label>
                    <select id="cycle-duration" required>
                        <option value="28" selected>28 jours</option>
                        <option value="26">26 jours</option>
                        <option value="30">30 jours</option>
                        <option value="32">32 jours</option>
                    </select>
                </div>
                
                <button type="submit" class="btn">Commencer le suivi 💕</button>
            </form>
        </div>
    </div>
    
    <!-- Application principale -->
    <div id="app" style="display: none;">
        <div class="app-container">
            <div class="header">
                <div class="logo">🌸</div>
                <h1>Bonjour, <span id="display-name">Prénom</span> !</h1>
                <p class="subtitle">Ton suivi de cycle personnalisé</p>
            </div>
            
            <!-- Onglets desktop -->
            <div class="tabs">
                <button class="tab active" onclick="showSection('cycle')">📅 Cycle</button>
                <button class="tab" onclick="showSection('rappels')">🔔 Rappels</button>
                <button class="tab" onclick="showSection('amour')">❤️ Amour</button>
                <button class="tab" onclick="showSection('profil')">👤 Profil</button>
            </div>
            
            <!-- Section Cycle -->
            <div id="section-cycle" class="section active">
                <div class="card">
                    <h3>📊 Ton cycle actuel</h3>
                    <p>Prochaine période estimée : <strong id="next-period">--/--/----</strong></p>
                    <p>Statut : <span id="current-status" style="color: #4caf50;">Charge tes données</span></p>
                    
                    <div class="phase-indicator">
                        <div class="phase menstruation">Menstruation</div>
                        <div class="phase follicular">Folliculaire</div>
                        <div class="phase ovulation">Ovulation</div>
                        <div class="phase luteal">Lutéale</div>
                    </div>
                </div>
                
                <div class="card">
                    <h3>📅 Calendrier du cycle</h3>
                    <div class="calendar" id="cycle-calendar">
                        <!-- Le calendrier sera généré par JavaScript -->
                    </div>
                </div>
                
                <div class="card">
                    <h3>📝 Suivi quotidien</h3>
                    <div class="form-group">
                        <label>Flux menstruel</label>
                        <select id="daily-flow">
                            <option value="">Sélectionne</option>
                            <option value="aucun">Aucun</option>
                            <option value="leger">Léger</option>
                            <option value="moyen">Moyen</option>
                            <option value="abondant">Abondant</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Humeur</label>
                        <select id="daily-mood">
                            <option value="">Sélectionne</option>
                            <option value="heureuse">😊 Heureuse</option>
                            <option value="triste">😢 Triste</option>
                            <option value="energique">💪 Énergique</option>
                            <option value="fatiguee">😴 Fatiguée</option>
                            <option value="irritable">😠 Irritable</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Symptômes</label>
                        <div class="checkbox-group">
                            <div class="checkbox-item">
                                <input type="checkbox" id="symptom-pain" value="douleurs">
                                <label for="symptom-pain">Douleurs</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="symptom-headache" value="maux-tete">
                                <label for="symptom-headache">Maux de tête</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="symptom-acne" value="acne">
                                <label for="symptom-acne">Acné</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="symptom-cravings" value="fringales">
                                <label for="symptom-cravings">Fringales</label>
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn" onclick="saveDailyData()">Enregistrer</button>
                </div>

                <!-- Section Alternatives (apparaît après 1 mois) -->
                <div id="alternatives-section" class="card hidden">
                    <h3>💡 Alternatives pour mieux vivre tes règles</h3>
                    <div class="alternative-card">
                        <h4>🌿 Pour les douleurs menstruelles</h4>
                        <p>• Applique une bouillotte sur le bas du ventre</p>
                        <p>• Pratique le yoga ou des étirements doux</p>
                        <p>• Essaye les infusions de camomille ou gingembre</p>
                    </div>
                    <div class="alternative-card">
                        <h4>💑 Dans ta relation de couple</h4>
                        <p>• Communique clairement sur tes besoins</p>
                        <p>• Planifiez des moments d'intimité adaptés</p>
                        <p>• Partagez les tâches ménagères pendant cette période</p>
                    </div>
                    <div class="alternative-card">
                        <h4>🍎 Alimentation et bien-être</h4>
                        <p>• Augmente ta consommation d'aliments riches en fer</p>
                        <p>• Réduis le sel pour diminuer les ballonnements</p>
                        <p>• Bois beaucoup d'eau et tisanes</p>
                    </div>
                </div>
                
                <div class="card">
                    <h3>📈 Statistiques du cycle</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value" id="cycle-length">28</div>
                            <div class="stat-label">Jours de cycle</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="period-length">5</div>
                            <div class="stat-label">Jours de règles</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="ovulation-day">14</div>
                            <div class="stat-label">Jour d'ovulation</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="fertile-days">6</div>
                            <div class="stat-label">Jours fertiles</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Section Rappels -->
            <div id="section-rappels" class="section">
                <div class="card">
                    <h3>🔔 Rappels actifs</h3>
                    <ul class="reminder-list" id="active-reminders">
                        <!-- Les rappels seront générés par JavaScript -->
                    </ul>
                </div>
                
                <div class="card">
                    <h3>➕ Ajouter un rappel</h3>
                    <div class="form-group">
                        <label>Type de rappel</label>
                        <select id="reminder-type">
                            <option value="regles">Début des règles</option>
                            <option value="ovulation">Période d'ovulation</option>
                            <option value="gyneco">Rendez-vous gynécologue</option>
                            <option value="medicament">Médicament</option>
                            <option value="eau">Boire de l'eau</option>
                            <option value="sport">Activité physique</option>
                            <option value="pilule" id="pilule-option" class="hidden">Pilule contraceptive</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Heure</label>
                        <input type="time" id="reminder-time">
                    </div>
                    
                    <div class="form-group">
                        <label>Répétition</label>
                        <select id="reminder-repeat">
                            <option value="once">Une fois</option>
                            <option value="daily">Tous les jours</option>
                            <option value="weekly">Toutes les semaines</option>
                            <option value="monthly">Tous les mois</option>
                        </select>
                    </div>
                    
                    <button class="btn" onclick="addReminder()">Ajouter le rappel</button>
                </div>
            </div>
            
            <!-- Section Amour -->
            <div id="section-amour" class="section">
                <div class="card">
                    <h3>💖 Suivi émotionnel</h3>
                    <p>Comment te sens-tu aujourd'hui ?</p>
                    
                    <div class="mood-tracker">
                        <div class="mood-option" data-mood="tres-heureuse">
                            <div>😍</div>
                            <div>Très heureuse</div>
                        </div>
                        <div class="mood-option" data-mood="heureuse">
                            <div>😊</div>
                            <div>Heureuse</div>
                        </div>
                        <div class="mood-option" data-mood="neutre">
                            <div>😐</div>
                            <div>Neutre</div>
                        </div>
                        <div class="mood-option" data-mood="triste">
                            <div>😔</div>
                            <div>Triste</div>
                        </div>
                        <div class="mood-option" data-mood="anxieuse">
                            <div>😰</div>
                            <div>Anxieuse</div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Niveau de stress (1-10)</label>
                        <input type="range" id="stress-level" min="1" max="10" value="5">
                        <div id="stress-value">5</div>
                    </div>
                    
                    <div class="form-group">
                        <label>Libido</label>
                        <select id="libido-level">
                            <option value="faible">Faible</option>
                            <option value="moyenne">Moyenne</option>
                            <option value="elevee">Élevée</option>
                        </select>
                    </div>
                    
                    <button class="btn" onclick="saveEmotionalData()">Enregistrer</button>
                </div>
                
                <div class="card">
                    <h3>💑 Intimité</h3>
                    <div class="form-group">
                        <label>Rapport sexuel aujourd'hui</label>
                        <select id="sexual-activity">
                            <option value="non">Non</option>
                            <option value="oui-protege">Oui, protégé</option>
                            <option value="oui-non-protege">Oui, non protégé</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>État d'esprit dans le couple</label>
                        <select id="relationship-status">
                            <option value="harmonie">Harmonie</option>
                            <option value="tensions-legères">Tensions légères</option>
                            <option value="dispute">Dispute</option>
                            <option value="communication">Bonne communication</option>
                        </select>
                    </div>
                    
                    <button class="btn" onclick="saveIntimacyData()">Enregistrer</button>
                </div>
                
                <div class="card">
                    <h3>💡 Conseils personnalisés</h3>
                    <p id="love-advice">Charge ton cycle pour voir les recommandations</p>
                </div>
            </div>
            
            <!-- Section Profil -->
            <div id="section-profil" class="section">
                <div class="card">
                    <h3>👤 Informations de base</h3>
                    <p>Âge : <strong id="profile-age">--</strong> ans</p>
                    <p>Sexe : <strong id="profile-gender">--</strong></p>
                    <p>Taille : <strong id="profile-height">--</strong></p>
                    <p>Poids : <strong id="profile-weight">--</strong></p>
                    <p>Cycle : <strong id="profile-cycle">28</strong> jours</p>
                    
                    <div class="form-group">
                        <label>Niveau d'activité physique</label>
                        <select id="profile-activity">
                            <option value="sedentaire">Sédentaire</option>
                            <option value="leger">Léger (1-2 fois/semaine)</option>
                            <option value="modere">Modéré (3-4 fois/semaine)</option>
                            <option value="intense">Intense (5+ fois/semaine)</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Objectif principal</label>
                        <select id="profile-goal">
                            <option value="suivi">Suivi normal</option>
                            <option value="grossesse">Grossesse</option>
                            <option value="contraception">Contraception</option>
                            <option value="sante">Santé générale</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Utilises-tu une contraception hormonale ?</label>
                        <select id="contraception-use">
                            <option value="non">Non</option>
                            <option value="oui">Oui</option>
                        </select>
                    </div>
                    
                    <button class="btn" onclick="saveProfile()">Enregistrer le profil</button>
                </div>
                
                <div class="card">
                    <h3>🩺 Santé & Contraception</h3>
                    <div class="form-group">
                        <label>Méthode contraceptive</label>
                        <select id="contraception-method">
                            <option value="aucune">Aucune</option>
                            <option value="pilule">Pilule</option>
                            <option value="implant">Implant</option>
                            <option value="stérilet">Stérilet</option>
                            <option value="preservatif">Préservatif</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Antécédents médicaux</label>
                        <textarea id="medical-history" placeholder="SOPK, endométriose, etc." rows="3"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Cycle habituel</label>
                        <select id="cycle-regularity">
                            <option value="regulier">Régulier</option>
                            <option value="irregulier">Ir régulier</option>
                        </select>
                    </div>
                    
                    <button class="btn" onclick="saveHealthData()">Enregistrer</button>
                </div>
                
                <div class="card">
                    <h3>😣 Symptômes fréquents</h3>
                    <p>Coche les symptômes que tu ressens souvent :</p>
                    
                    <div class="checkbox-group">
                        <div class="checkbox-item">
                            <input type="checkbox" id="symptom-cramps" value="cramps">
                            <label for="symptom-cramps">Crampes</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="symptom-migraine" value="migraine">
                            <label for="symptom-migraine">Migraines</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="symptom-breast-pain" value="breast-pain">
                            <label for="symptom-breast-pain">Douleurs mammaires</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="symptom-bloating" value="bloating">
                            <label for="symptom-bloating">Ballonnements</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="symptom-fatigue" value="fatigue">
                            <label for="symptom-fatigue">Fatigue</label>
                        </div>
                        <div class="checkbox-item">
                            <input type="checkbox" id="symptom-mood-swings" value="mood-swings">
                            <label for="symptom-mood-swings">Sautes d'humeur</label>
                        </div>
                    </div>
                    
                    <button class="btn" onclick="saveSymptoms()">Enregistrer</button>
                </div>
                
                <button class="btn btn-secondary" onclick="resetApp()">🔄 Recommencer</button>
            </div>
        </div>
    </div>

    <script>
        // Variables globales
        let userData = {
            registrationDate: null,
            usesContraception: false
        };

        // Gestion du menu burger
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            const burger = document.getElementById('burger-menu');
            
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            burger.classList.toggle('active'); // Animation des traits
        }

        // Fermer le sidebar en cliquant sur l'overlay
        document.getElementById('sidebar-overlay').addEventListener('click', toggleSidebar);
        document.getElementById('burger-menu').addEventListener('click', toggleSidebar);

        // Navigation avec le menu burger
        function switchSection(sectionName) {
            showSection(sectionName);
            toggleSidebar(); // Ferme le menu après sélection
        }

        // Navigation existante (inchangée)
        function showSection(sectionName) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.sidebar-item').forEach(item => {
                item.classList.remove('active');
            });
            
            document.getElementById('section-' + sectionName).classList.add('active');
            document.querySelector(`.tab[onclick="showSection('${sectionName}')"]`)?.classList.add('active');
            document.querySelector(`.sidebar-item[onclick="switchSection('${sectionName}')"]`).classList.add('active');
            
            if (sectionName === 'amour') {
                updateAmourMessages();
            } else if (sectionName === 'cycle') {
                generateCalendar();
            } else if (sectionName === 'rappels') {
                updateReminders();
            }
        }
        
        // Messages selon le sexe
        document.getElementById('user-gender').addEventListener('change', function() {
            const message = document.getElementById('gender-message');
            const maleQuestion = document.getElementById('male-question');
            
            if (this.value === 'feminin') {
                message.innerHTML = '🌸 Évidemment, il n\'y a que les femmes qui ont leurs règles ! Bienvenue dans le club ! 💃';
                message.style.display = 'block';
                maleQuestion.classList.add('hidden');
                // Rendre la question optionnelle pour les femmes
                document.getElementById('male-reason').removeAttribute('required');
            } else if (this.value === 'masculin') {
                message.innerHTML = '🤔 Hum mon gars belek t\'as une maladie c\'est pas des règles !';
                message.style.display = 'block';
                maleQuestion.classList.remove('hidden');
                // Rendre la question obligatoire pour les hommes
                document.getElementById('male-reason').setAttribute('required', 'true');
            } else if (this.value === 'autre') {
                message.innerHTML = '💫 Merci de partager cette information avec nous !';
                message.style.display = 'block';
                maleQuestion.classList.add('hidden');
                document.getElementById('male-reason').removeAttribute('required');
            } else {
                message.style.display = 'none';
                maleQuestion.classList.add('hidden');
                document.getElementById('male-reason').removeAttribute('required');
            }
        });

        // Gestion de la contraception
        document.getElementById('contraception-use').addEventListener('change', function() {
            const piluleOption = document.getElementById('pilule-option');
            if (this.value === 'oui') {
                piluleOption.classList.remove('hidden');
                userData.usesContraception = true;
            } else {
                piluleOption.classList.add('hidden');
                userData.usesContraception = false;
            }
        });
        
        // Inscription
        document.getElementById('inscription-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userName = document.getElementById('user-name').value;
            const userAge = document.getElementById('user-age').value;
            const userGender = document.getElementById('user-gender').value;
            const userHeight = document.getElementById('user-height').value;
            const userWeight = document.getElementById('user-weight').value;
            const maleReason = document.getElementById('male-reason').value;
            
            // Vérification pour les hommes seulement
            if (userGender === 'masculin' && !maleReason) {
                alert('Veuillez indiquer pourquoi vous utilisez cette application');
                return;
            }

            // Messages pour mineurs
            if (parseInt(userAge) < 18) {
                alert('👶 Petit conseil : Prends ton temps, choisis bien tes partenaires et protège-toi toujours ! 💖');
            }
            
            // Enregistrement de la date d'inscription
            userData.registrationDate = new Date();
            
            // Passe à l'application
            document.getElementById('display-name').textContent = userName;
            document.getElementById('profile-age').textContent = userAge;
            document.getElementById('profile-gender').textContent = 
                userGender === 'feminin' ? 'Féminin' : 
                userGender === 'masculin' ? 'Masculin' : 'Autre';
            document.getElementById('profile-height').textContent = userHeight ? userHeight + ' cm' : 'Non précisé';
            document.getElementById('profile-weight').textContent = userWeight ? userWeight + ' kg' : 'Non précisé';
            
            document.getElementById('inscription-page').style.display = 'none';
            document.getElementById('app').style.display = 'block';
            
            // Afficher le menu burger après inscription
            document.getElementById('burger-menu').classList.remove('hidden');
            
            // Calcule automatiquement
            updateCycle();
            generateCalendar();

            // Vérifier si on doit afficher les alternatives (après 1 mois)
            checkAndShowAlternatives();
        });
        
        // Calcul du cycle
        function updateCycle() {
            const lastPeriod = document.getElementById('update-period')?.value || document.getElementById('last-period').value;
            const cycleLength = parseInt(document.getElementById('cycle-duration').value);
            
            if (!lastPeriod) {
                alert('Renseigne la date de tes dernières règles');
                return;
            }
            
            const lastPeriodDate = new Date(lastPeriod);
            const nextPeriod = new Date(lastPeriodDate);
            nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
            
            document.getElementById('next-period').textContent = nextPeriod.toLocaleDateString('fr-FR');
            
            // Statut actuel
            const today = new Date();
            const ovulation = new Date(lastPeriodDate);
            ovulation.setDate(ovulation.getDate() + (cycleLength - 14));
            
            if (today.getDate() === ovulation.getDate()) {
                document.getElementById('current-status').textContent = '🎯 OVULATION AUJOURD\'HUI !';
                document.getElementById('current-status').style.color = '#ff9800';
                document.getElementById('love-advice').textContent = '🎯 Moment idéal pour faire un bébé ! Mais attention, protégez-vous si ce n\'est pas le projet !';
            } else {
                document.getElementById('current-status').textContent = '✅ Période non fertile';
                document.getElementById('current-status').style.color = '#4caf50';
                document.getElementById('love-advice').textContent = '✅ Tu peux t\'amuser ! Profitez de moments complices sans stress.';
            }
            
            // Mise à jour des statistiques
            document.getElementById('cycle-length').textContent = cycleLength;
            document.getElementById('ovulation-day').textContent = cycleLength - 14;
            document.getElementById('fertile-days').textContent = 6; // Généralement 5-6 jours fertiles
        }

        // Génération du calendrier
        function generateCalendar() {
            const calendar = document.getElementById('cycle-calendar');
            calendar.innerHTML = '';
            
            const today = new Date();
            const lastPeriod = document.getElementById('last-period').value;
            const cycleLength = parseInt(document.getElementById('cycle-duration').value);
            
            if (!lastPeriod) return;
            
            const lastPeriodDate = new Date(lastPeriod);
            const nextPeriod = new Date(lastPeriodDate);
            nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
            
            // Générer les jours du mois
            for (let i = 0; i < 35; i++) {
                const day = document.createElement('div');
                day.className = 'calendar-day';
                day.textContent = i + 1;
                
                // Marquer les jours de règles
                if (i < 5) {
                    day.classList.add('period');
                }
                
                // Marquer les jours fertiles (autour de l'ovulation)
                if (i >= cycleLength - 16 && i <= cycleLength - 11) {
                    day.classList.add('fertile');
                }
                
                // Marquer le jour d'ovulation
                if (i === cycleLength - 14) {
                    day.classList.add('ovulation');
                }
                
                // Marquer aujourd'hui
                if (i === today.getDate() - 1) {
                    day.classList.add('today');
                }
                
                calendar.appendChild(day);
            }
        }

        // Vérifier et afficher les alternatives après 1 mois
        function checkAndShowAlternatives() {
            if (userData.registrationDate) {
                const oneMonthLater = new Date(userData.registrationDate);
                oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
                
                if (new Date() >= oneMonthLater) {
                    document.getElementById('alternatives-section').classList.remove('hidden');
                }
            }
        }
        
        // Suivi émotionnel
        document.querySelectorAll('.mood-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.mood-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                this.classList.add('selected');
            });
        });
        
        document.getElementById('stress-level').addEventListener('input', function() {
            document.getElementById('stress-value').textContent = this.value;
        });
        
        // Sauvegarde des données
        function saveDailyData() {
            alert('Données quotidiennes enregistrées !');
        }
        
        function saveEmotionalData() {
            alert('Données émotionnelles enregistrées !');
        }
        
        function saveIntimacyData() {
            alert('Données d\'intimité enregistrées !');
        }
        
        function saveProfile() {
            alert('Profil enregistré !');
        }
        
        function saveHealthData() {
            alert('Données de santé enregistrées !');
        }
        
        function saveSymptoms() {
            alert('Symptômes enregistrés !');
        }
        
        // Gestion des rappels
        function addReminder() {
            const type = document.getElementById('reminder-type').value;
            const time = document.getElementById('reminder-time').value;
            const repeat = document.getElementById('reminder-repeat').value;
            
            if (!time) {
                alert('Veuillez sélectionner une heure');
                return;
            }
            
            alert(`Rappel "${type}" ajouté pour ${time} (${repeat})`);
            updateReminders();
        }
        
        function updateReminders() {
            const reminderList = document.getElementById('active-reminders');
            reminderList.innerHTML = '';
            
            // Exemples de rappels (sans pilule si pas utilisée)
            const reminders = [
                { type: 'eau', time: '12:00', active: true },
                { type: 'regles', time: '10/11/2023', active: true }
            ];

            // Ajouter rappel pilule seulement si utilisée
            if (userData.usesContraception) {
                reminders.push({ type: 'pilule', time: '08:00', active: true });
            }
            
            reminders.forEach(reminder => {
                const item = document.createElement('li');
                item.className = 'reminder-item';
                
                let typeText = '';
                switch(reminder.type) {
                    case 'pilule': typeText = '💊 Pilule contraceptive'; break;
                    case 'eau': typeText = '💧 Boire de l\'eau'; break;
                    case 'regles': typeText = '🩸 Début des règles'; break;
                }
                
                item.innerHTML = `
                    <div>${typeText}</div>
                    <div>${reminder.time}</div>
                `;
                
                reminderList.appendChild(item);
            });
        }
        
        function updateAmourMessages() {
            // Fonction existante
        }
        
        // Reset
        function resetApp() {
            if (confirm('Veux-tu recommencer depuis le début ?')) {
                document.getElementById('app').style.display = 'none';
                document.getElementById('inscription-page').style.display = 'block';
                document.getElementById('inscription-form').reset();
                document.getElementById('burger-menu').classList.add('hidden');
                document.getElementById('burger-menu').classList.remove('active');
                userData.registrationDate = null;
                userData.usesContraception = false;
            }
        }
        
        // Date par défaut
        window.addEventListener('load', function() {
            const defaultDate = new Date();
            defaultDate.setDate(defaultDate.getDate() - 14);
            document.getElementById('last-period').valueAsDate = defaultDate;
            
            // Initialiser les rappels
            updateReminders();
        });
    </script>
    <script>
// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/cyclelove-app/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker enregistré avec succès:', registration);
    })
    .catch(function(error) {
      console.log("Échec de l'enregistrement du Service Worker:", error);
    });
}

// Installation PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

function installApp() {
  if(deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Utilisateur a installé la PWA');
      }
      deferredPrompt = null;
    });
  }
}
</script>
</body>
</html>
